import { DTRating } from './movies.types'

export type DTContent = {
  Actors: string
  Awards: string
  Country: string
  Director: string
  Genre: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Rated: string
  Ratings: DTRating[]
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
}

export type DTMovie = DTContent & {
  BoxOffice: string
  DVD: string
  Production: string
}

export type DTSerie = DTContent & {
  totalSeasons: string
}
