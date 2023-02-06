import { FC } from 'react'
import Link from 'next/link'
import { Image, StyledCard, Subtitle, Text, Texts, Title } from './card.styles'
import { CTCard } from './card.types'

export const Card: FC<CTCard> = ({ image, link, subtitle, text, title }) => {
  if (link)
    return (
      <Link {...link}>
        <StyledCard>
          <Image {...image} alt='Movie poster' />
          <Texts>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {typeof text === 'string' ? <Text>{text}</Text> : text}
          </Texts>
        </StyledCard>{' '}
      </Link>
    )
  else
    return (
      <StyledCard>
        <Image {...image} alt='Movie poster' />
        <Texts>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {typeof text === 'string' ? <Text>{text}</Text> : text}
        </Texts>
      </StyledCard>
    )
}
