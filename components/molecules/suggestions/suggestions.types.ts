import { CTButton } from '@atoms/button/button.types'
import { CTCard } from '@atoms/card/card.types'

export type CTSuggestionsTile = {
  action: CTButton
  cards: Array<CTCard>
  title: string
}

export type CTSuggestions = {
  sections: Array<CTSuggestionsTile>
}
