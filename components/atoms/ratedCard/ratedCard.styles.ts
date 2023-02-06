import NextLink from 'next/link'
import { device } from 'configs/theme'
import styled from 'styled-components'

export const Link = styled(NextLink)`
  @media (max-width: ${device.tablet}) {
    width: calc(50% - 1rem);
  }
`

export const StyledRatedCard = styled.article<{ poster: string }>`
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 23.41%,
      rgba(0, 0, 0, 0) 69.17%
    ),
    url(${({ poster }) => poster});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 20rem;
  justify-content: flex-end;
  padding: 1rem;
  width: 15rem;

  @media (max-width: ${device.tablet}) {
    width: 100%;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.gray.normal};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
`
