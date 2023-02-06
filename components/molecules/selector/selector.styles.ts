import styled, { css } from 'styled-components'

export const StyledSelector = styled.span`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const customStyledButton = (active: boolean) => css`
  color: ${({ theme }) =>
    active ? theme.color.gray.dark : theme.color.gray.normal};
`
