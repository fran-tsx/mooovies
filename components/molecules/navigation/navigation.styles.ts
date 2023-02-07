import { device } from 'configs/theme'
import NextLink from 'next/link'
import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;

  @media (max-width: ${device.tablet}) {
    gap: 1rem;
    width: 100%;
  }
`

export const Logo = styled.img`
  height: 1.1875rem;
  width: 6.0625rem;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${device.tablet}) {
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: ${device.tablet}) {
    display: none;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;

  @media (max-width: ${device.tablet}) {
    flex-direction: row;
  }
`

export const Option = styled.li<{ active: boolean }>`
  align-items: center;
  color: ${({ active, theme }) =>
    active ? theme.color.black : theme.color.gray.dark};
  display: flex;
  gap: 0.25rem;
  justify-content: flex-start;
`

export const Link = styled(NextLink)`
  &:hover {
    color: ${({ theme }) => theme.color.gray.dark};
  }
`
