import { services } from '!services'
import { CTSuggestions } from '@molecules/suggestions/suggestions.types'
import { Page } from '@templates/page/page'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Discover: NextPage = ({
  suggestions,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page suggestions={suggestions} title='Discover'>
    {' '}
  </Page>
)

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: { suggestions },
    revalidate: 604800,
  }
}

export default Discover
