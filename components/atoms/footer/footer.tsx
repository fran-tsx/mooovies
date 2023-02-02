import { FC } from 'react'
import { links } from './footer.data'
import { Item, Link, List, StyledFooter, Text } from './footer.styles'

export const Footer: FC = () => (
  <StyledFooter>
    <List>
      {links.map(({ href, text }) => (
        <Item key={text}>
          <Link href={href} rel='noreferrer' target='_blank'>
            {text}
          </Link>
        </Item>
      ))}
    </List>
    <Text>© 1990-2023 by Franncode, Inc.</Text>
  </StyledFooter>
)
