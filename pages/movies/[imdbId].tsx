import { services } from '!services'
import { Imdb } from '@molecules/movieCard/movieCard.styles'
import { CTSuggestions } from '@molecules/suggestions/suggestions.types'
import {
  Back,
  Data,
  Details,
  Info,
  Infos,
  Subtitle,
  Text,
  Title,
  Top,
} from '@pages/movies/[imdbId].styles'
import { Page } from '@templates/page/page'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { useRouter } from 'next/router'

const Movie: NextPage = ({
  movie,
  suggestions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { back } = useRouter()
  const {
    Actors: actors,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Poster: poster,
    Runtime: runtime,
    Title: title,
  } = movie
  const info = [
    {
      title: 'Genre',
      text: genre,
    },
    {
      title: 'Summary',
      text: plot,
    },
    {
      title: 'Actors',
      text: actors,
    },
  ]

  return (
    <Page suggestions={suggestions}>
      <Top background={poster}>
        <Back
          alt='Back icon'
          onClick={back}
          src='/pages/movies/[imdbId]/back.svg'
        />
        <Data>
          <Title>{title}</Title>
          <Infos>
            <Info>
              <Imdb
                alt='IMdb logo'
                src='/components/molecules/movieCard/imdb.jpg'
              />
              {imdbRating}
            </Info>
            <Info>
              <img alt='Clock icon' src='/pages/movies/[imdbId]/schedule.svg' />
              {runtime}
            </Info>
          </Infos>
        </Data>
      </Top>
      {info.map(
        ({ text, title }) =>
          text !== 'N/A' && (
            <Details key={title}>
              <Subtitle>{title}</Subtitle>
              <Text>{text}</Text>
            </Details>
          )
      )}
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

  const imdbId = context?.params?.imdbId as string
  if (imdbId) {
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
    const movie = await services.movies.get({ imdbId })
    return {
      props: { movie, suggestions },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

export default Movie
