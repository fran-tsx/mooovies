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
  Poster: string
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

export type STSearchReturn = DTMovie | DTMovie[]

export type STFavoritesReturn = DTMovie[]
