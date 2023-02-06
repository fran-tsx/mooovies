/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react'
import { Image, StyledCard, Subtitle, Text, Texts, Title } from './card.styles'
import { CTCard } from './card.types'

export const Card: FC<CTCard> = ({ image, subtitle, text, title }) => (
  <StyledCard>
    <Image {...image} />
    <Texts>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {typeof text === 'string' ? <Text>{text}</Text> : text}
    </Texts>
  </StyledCard>
)
