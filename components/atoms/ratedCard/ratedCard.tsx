import { FC } from 'react'
import { Caption, Link, StyledRatedCard, Text } from './ratedCard.styles'
import { CTRatedCard } from './ratedCard.types'

export const RatedCard: FC<CTRatedCard> = ({
  imdbID,
  poster,
  title,
  type,
  year,
}) => (
  <Link href={`/movies/${imdbID}`}>
    <StyledRatedCard
      poster={
        poster === 'N/A' ? '/components/atoms/ratedCard/poster.jpg' : poster
      }
    >
      <Caption>{type}</Caption>
      <Text>{title}</Text>
      <Caption>{year}</Caption>
    </StyledRatedCard>
  </Link>
)
