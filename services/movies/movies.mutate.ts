import { DTMovie } from './movies.types'

const toCard = (movies: DTMovie[]) =>
  movies.map(({ Genre, imdbID, imdbRating, Poster, Title }) => ({
    genre: Genre,
    imdbId: imdbID,
    imdbRating,
    poster: Poster,
    title: Title,
  }))

export const mutate = {
  toCard,
}
