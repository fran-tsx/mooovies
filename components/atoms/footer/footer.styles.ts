import { device } from 'configs/theme'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;

  @media (max-width: ${device.tablet}) {
    margin-top: 2rem;
  }
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  list-style-type: none;
`

export const Item = styled.li``

export const Link = styled.a`
  font-size: 0.75rem;
`

export const Text = styled.p`
  font-size: 0.75rem;
`
