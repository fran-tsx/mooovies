import { CTButton } from '@atoms/button/button.types'
import { CTMovieCard } from '@molecules/movieCard/movieCard.types'

export type CTSuggestionsTile = {
  action: CTButton
  cards: Array<CTMovieCard>
  title: string
}

export type CTSuggestions = {
  sections: Array<CTSuggestionsTile>
}
