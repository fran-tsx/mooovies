import styled from 'styled-components'

export const StyledCard = styled.article`
  align-items: flex-start;
  display: flex;
  gap: 0.25rem;
`

export const Image = styled.img`
  width: 3rem;
  height: 4rem;
`

export const Texts = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const Title = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
`

export const Subtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`

export const Text = styled(Subtitle)``
