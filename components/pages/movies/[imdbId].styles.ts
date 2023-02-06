import styled from 'styled-components'

export const Top = styled.div<{ background: string }>`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -38.87%, #ffffff 96.29%),
    ${({ background, theme }) =>
      background !== 'N/A' ? `url(${background})` : theme.color.gray.dark};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.25rem 0.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 24rem;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`

export const Back = styled.img`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 2rem;
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  width: 3rem;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

export const Infos = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
`

export const Info = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.color.gray.dark};
  display: flex;
  font-size: 0.75rem;
  gap: 0.25rem;
`

export const Details = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
`

export const Subtitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: 1rem;
  font-weight: 400;
`
