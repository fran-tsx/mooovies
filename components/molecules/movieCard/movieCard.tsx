import { Card } from '@atoms/card/card'
import { Text } from '@atoms/card/card.styles'
import { FC } from 'react'
import { Imdb, Rate } from './movieCard.styles'
import { CTMovieCard } from './movieCard.types'

export const MovieCard: FC<CTMovieCard> = ({
  genre,
  imdbId,
  imdbRating,
  poster,
  title,
}) => (
  <Card
    image={{
      alt: 'Movie poster',
      src: poster,
    }}
    link={{ href: `/movies/${imdbId}` }}
    subtitle={genre}
    text={
      <Rate>
        <Imdb alt='IMdb logo' src='/components/molecules/movieCard/imdb.jpg' />
        <Text>{imdbRating}</Text>
      </Rate>
    }
    title={title}
  />
)
