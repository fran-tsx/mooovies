import { STGetMoviesParams } from './movies.types'

const favorites = async () => {
  const favoriteSeries = [
    {
      imdbId: 'tt4158110',
      title: 'Mr. Robot',
    },
    {
      imdbId: 'tt2543312',
      title: 'Halt and Catch Fire',
    },
  ]
  const requests = favoriteSeries.map(({ imdbId }) => search({ imdbId }))
  const movies = await Promise.all(requests)
  return movies
}

const search = async (params?: STGetMoviesParams) => {
  let queryParams = ''
  if (params) {
    queryParams = params.imdbId ? `i=${params.imdbId}` : `s=${params.title}`
  }
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&r=json&${queryParams}`
  )
  const movies = await request.json()
  return movies
}

const top4 = async () => {
  const topMovies = [
    {
      imdbId: 'tt0068646',
      title: 'The Godfather',
    },
    {
      imdbId: 'tt1375666',
      title: 'Inception',
    },
    {
      imdbId: 'tt0133093',
      title: 'The Matrix',
    },
    {
      imdbId: 'tt0816692',
      title: 'Interstellar',
    },
  ]
  const requests = topMovies.map(({ imdbId }) => search({ imdbId }))
  const movies = await Promise.all(requests)
  return movies
}

export const movies = {
  favorites,
  search,
  top4,
}
