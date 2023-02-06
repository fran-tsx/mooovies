import styled from 'styled-components'

export const Results = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray.dark};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`
