import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { opacity: 1 }
 50% { opacity: 0.5; }
 100% { opacity: 1; }
`

export const StyledSkeleton = styled.div<{ height: string; width: string }>`
  background-color: ${({ theme }) => theme.color.gray.superlight};
  border-radius: 0.5rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  animation-name: ${breatheAnimation};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
`
