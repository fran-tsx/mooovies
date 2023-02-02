import { services } from '!services'
import { Page } from '@organisms/page/page'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Search: NextPage = ({
  favorites,
  top4,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Page title='Search'>Search</Page>
}

export const getStaticProps: GetStaticProps = async () => {
  const [favorites, top4] = await Promise.all([
    services.movies.favorites(),
    services.movies.top4(),
  ])
  return {
    props: { favorites, top4 },
    revalidate: 604800,
  }
}

export default Search
