import { services } from '!services'
import { Input } from '@atoms/input/input'
import { Selector } from '@molecules/selector/selector'
import { CTSuggestions } from '@molecules/suggestions/suggestions.types'
import { Page } from '@templates/page/page'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DTMovie } from 'services/movies/movies.types'

const Text = dynamic(() =>
  import('@pages/search/search.styles').then(({ Text }) => Text)
)
const Results = dynamic(() =>
  import('@pages/search/search.styles').then(({ Results }) => Results)
)
const Skeleton = dynamic(() =>
  import('@atoms/skeleton/skeleton').then(({ Skeleton }) => Skeleton)
)
const RatedCard = dynamic(() =>
  import('@atoms/ratedCard/ratedCard').then(({ RatedCard }) => RatedCard)
)

const Search: NextPage = ({
  initial,
  suggestions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { push, query } = useRouter()
  const [search, setSearch] = useState<string>(initial.search)
  const [filters, setFilters] = useState<
    Array<{
      active: boolean
      disabled?: boolean
      label: string
      value: 'episode' | 'movie' | 'movie,series' | 'series'
    }>
  >([
    {
      active: false,
      disabled: true,
      label: 'Tv series',
      value: 'series',
    },
    {
      active: true,
      label: 'Movies',
      value: 'movie',
    },

    {
      active: false,
      disabled: true,
      label: 'Both',
      value: 'movie,series',
    },
  ])
  const [results, setResults] = useState<
    Pick<DTMovie, 'Poster' | 'Title' | 'Type' | 'Year' | 'imdbID'>[]
  >(initial.results)
  const [status, setStatus] = useState<
    'error' | 'loading' | 'not found' | 'success' | 'waiting'
  >(initial.status)
  const [abort, setAbort] = useState<VoidFunction>()
  const selectedFilter = filters.filter(({ active }) => active)[0].value

  const searchMovie = async (text: string) => {
    if (abort) abort()
    try {
      setStatus('loading')
      const { abort, results, success } = await services.movies.search(
        text,
        selectedFilter,
        5
      )
      setAbort(abort)
      setStatus(success ? 'success' : 'not found')
      setResults(success ? results : [])
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (value: string) => {
    setSearch(value)
    push(`/search?keyword=${value}&type=${selectedFilter}`)
    if (value.length > 3) searchMovie(value)
    else {
      setResults([])
      setStatus('waiting')
    }
  }

  const handleFilter = (value: string) => {
    const nextFilters = filters.map((filter) => ({
      ...filter,
      active: filter.value === value,
    }))
    setFilters(nextFilters)
  }

  useEffect(() => {
    if (!query?.keyword) {
      setSearch('')
      setResults([])
      setStatus('waiting')
      setAbort(undefined)
    }
  }, [query])

  return (
    <Page suggestions={suggestions} title='Search'>
      <Selector onOption={handleFilter} options={filters} />
      <Input
        fill
        icon='/pages/search/magnifyingGlass.svg'
        onChange={({ target }) => handleChange(target.value)}
        placeholder={`Search ${selectedFilter} by title`}
        value={search}
      />
      {(() => {
        switch (status) {
          case 'error':
            return <Text>Something went wrong, please reload the page</Text>
          case 'loading':
            return (
              <>
                <Text>Searching...</Text>
                <Results>
                  <Skeleton height='20rem' width='15rem' />
                  <Skeleton height='20rem' width='15rem' />
                  <Skeleton height='20rem' width='15rem' />
                  <Skeleton height='20rem' width='15rem' />
                  <Skeleton height='20rem' width='15rem' />
                  <Skeleton height='20rem' width='15rem' />
                </Results>
              </>
            )
          case 'not found':
            return (
              <Text>We were not able to find a match, try another search.</Text>
            )
          case 'success':
            return (
              <>
                <Text>{`Results for "${search}" (${results.length})`}</Text>
                <Results>
                  {results.map(({ imdbID, Poster, Title, Type, Year }) => (
                    <RatedCard
                      imdbID={imdbID}
                      key={Title}
                      poster={Poster}
                      title={Title}
                      type={Type}
                      year={Year}
                    />
                  ))}
                </Results>
              </>
            )
          case 'waiting':
          default:
            return null
        }
      })()}
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const [favorites, top3] = await Promise.all([
    services.movies.favorites(),
    services.movies.top3(),
  ])
  const suggestions: CTSuggestions['sections'] = [
    {
      action: {
        children: 'See more',
        link: {
          href: '/movies/popular',
        },
      },
      cards: services.movies.mutate.toCard(top3),
      title: 'Popular',
    },
    {
      action: {
        children: 'See more',
        link: {
          href: '/movies/favotires',
        },
      },
      cards: services.movies.mutate.toCard(favorites),
      title: 'Favorites',
    },
  ]
  const keyword = context?.query?.keyword as string
  if (keyword) {
    const type = context?.query?.type as
      | 'episode'
      | 'movie'
      | 'movie,series'
      | 'series'
    const { results, success } = await services.movies.search(
      keyword,
      type || 'movie',
      5
    )
    return {
      props: {
        initial: {
          results: success ? results : [],
          search: keyword,
          status: success ? 'success' : 'not found',
        },
        suggestions,
      },
    }
  } else {
    return {
      props: {
        initial: {
          results: [],
          search: '',
          status: 'waiting',
        },
        suggestions,
      },
    }
  }
}

export default Search
