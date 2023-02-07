export interface DTRating {
  Source: string
  Value: string
}

export type DTMovie = {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  Director: string
  DVD: string
  Genre: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string | 'N/A'
  Production: string
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

export type STGetParams = {
  imdbId?: string
  title?: string
}

export type STSearchReturn = {
  abort: VoidFunction
  results: Pick<DTMovie, 'imdbID' | 'Poster' | 'Title' | 'Type' | 'Year'>[]
  success: boolean
  totalResults: string
}

export type STFavoritesReturn = DTMovie[]
