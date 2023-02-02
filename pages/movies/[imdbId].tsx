import { services } from '!services'
import { Page } from '@organisms/page/page'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { DTMovie } from 'services/movies/movies.types'

const Movie: NextPage<{ movie: DTMovie }> = ({ movie }) => <Page>Movie</Page>

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const imdbId = context?.params?.imdbId as string
  if (imdbId) {
    const movie = await services.movies.get({ imdbId })
    return {
      props: { movie },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

export default Movie
