import { Button } from '@atoms/button/button'
import { MovieCard } from '@molecules/movieCard/movieCard'
import { FC } from 'react'
import { Section, StyledSuggestions, Title } from './suggestions.styles'
import { CTSuggestions } from './suggestions.types'

export const Suggestions: FC<CTSuggestions> = ({ sections }) => (
  <StyledSuggestions>
    {sections.map(({ action, cards, title }) => (
      <Section key={title}>
        <Title>{title}</Title>
        {cards.map((card) => (
          <MovieCard key={card.title} {...card} />
        ))}
        {/* TODO: FIX REHYDRATE ERROR */}
        {/* <Button {...action} fill /> */}
      </Section>
    ))}
  </StyledSuggestions>
)
