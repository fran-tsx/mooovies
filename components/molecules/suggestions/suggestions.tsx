import { Button } from '@atoms/button/button'
import { Card } from '@atoms/card/card'
import { FC } from 'react'
import { Section, StyledSuggestions, Title } from './suggestions.styles'
import { CTSuggestions } from './suggestions.types'

export const Suggestions: FC<CTSuggestions> = ({ sections }) => (
  <StyledSuggestions>
    {sections.map(({ action, cards, title }) => (
      <Section key={title}>
        <Title>{title}</Title>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
        <Button {...action} fill />
      </Section>
    ))}
  </StyledSuggestions>
)
