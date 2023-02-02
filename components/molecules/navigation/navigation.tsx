import { useRouter } from 'next/router'
import { FC } from 'react'
import { options } from './navigation.data'
import {
  Link,
  List,
  Logo,
  Menu,
  Option,
  StyledNavigation,
  Title,
} from './navigation.styles'

export const Navigation: FC = () => {
  const { route } = useRouter()

  return (
    <StyledNavigation>
      <Logo alt='logo' src='/logo.svg' />
      <Menu>
        <Title>Menu</Title>
        <List>
          {options.map(({ href, icon, label }) => {
            return (
              <Option key={href} active={route === href}>
                {icon(route === href)}
                <Link href={href}>{label}</Link>
              </Option>
            )
          })}
        </List>
      </Menu>
    </StyledNavigation>
  )
}
