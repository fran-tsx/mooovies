import { mutate } from './movies.mutate'
import {
  DTMovie,
  STFavoritesReturn,
  STGetParams,
  STSearchReturn,
} from './movies.types'

const favorites = async (): Promise<STFavoritesReturn> => {
  const favoriteSeries = [
    {
      imdbId: 'tt0993846',
      title: 'The Wolf of Wall Street',
    },
    {
      imdbId: 'tt4154756',
      title: 'Avengers: Infinity War',
    },
    {
      imdbId: 'tt0816692',
      title: 'Interstellar',
    },
  ]
  const requests = favoriteSeries.map(({ imdbId }) => get({ imdbId }))
  const movies = await Promise.all(requests)
  return movies
}

const get = async ({ imdbId, title }: STGetParams): Promise<DTMovie> => {
  const by = imdbId ? `i=${imdbId}` : `t=${title}`
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&r=json&plot=full&type=movie&${by}`
  )
  const movie = await request.json()
  return movie
}

const search = async (
  text: string,
  type: 'episode' | 'movie' | 'movie,series' | 'series' = 'movie',
  limitResults?: number
): Promise<STSearchReturn> => {
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&r=json&type=${type}&s=${text}`
  )
  const { Response, Search, totalResults } = await request.json()
  return {
    results: Search ? Search.slice(0, limitResults || Search.length) : [],
    success: Response === 'True',
    totalResults,
  }
}

const top3 = async () => {
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
  ]
  const requests = topMovies.map(({ imdbId }) => get({ imdbId }))
  const movies = await Promise.all(requests)
  return movies
}

export const movies = {
  favorites,
  get,
  mutate,
  search,
  top3,
}
