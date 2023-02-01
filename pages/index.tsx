import { services } from '!services'
import { Page } from '@molecules/page/page'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Home: NextPage = ({
  favorites,
  top4,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Page>Home</Page>
}

export const getStaticProps: GetStaticProps = async () => {
  const favorites = await services.movies.favorites()
  const top4 = await services.movies.top4()

  return {
    props: { favorites, top4 },
  }
}

export default Home
