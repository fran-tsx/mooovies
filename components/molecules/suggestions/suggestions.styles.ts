import styled from 'styled-components'

export const StyledSuggestions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`
