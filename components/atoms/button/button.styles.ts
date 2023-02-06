import styled, { css } from 'styled-components'
import { CTButton } from './button.types'

export const StyledButton = styled.button<
  CTButton & {
    $fill?: boolean
  }
>`
  align-items: center;
  background-color: ${({ disabled, theme }) =>
    disabled && theme.color.gray.normal};
  border-radius: 0.25rem;
  color: ${({ disabled, theme }) => disabled && theme.color.gray.dark};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  gap: 8px;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  width: ${({ fill }) => (fill ? '100%' : 'auto')};

  ${({ secondary, tertiary, fourth }) =>
    secondary
      ? secondaryType
      : tertiary
      ? tertiaryType
      : fourth
      ? fourthType
      : primaryType}
  ${({ styles }) => styles}
`

const primaryType = css`
  background-color: ${({ theme }) => theme.color.accent.normal};
  color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 2rem;
`

const secondaryType = css`
  background-color: ${({ theme }) => theme.color.accent.light};
  color: ${({ theme }) => theme.color.accent.normal};
  padding: 0.5rem 2rem;
`

const tertiaryType = css`
  color: ${({ theme }) => theme.color.accent.normal};
  padding: 0;
`

const fourthType = css`
  color: ${({ theme }) => theme.color.black};
  padding: 0;
`
