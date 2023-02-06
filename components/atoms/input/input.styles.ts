import styled from 'styled-components'

export const StyledInput = styled.label<{ $fill?: boolean }>`
  align-items: flex-start;
  color: ${({ theme }) => theme.color.gray.dark};
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  font-weight: bold;
  gap: 0.25rem;
  height: fit-content;
  justify-content: flex-start;
  letter-spacing: 0.12em;
  min-width: 14rem;
  text-transform: uppercase;
  user-select: none;
  width: ${({ $fill }) => $fill && '100%'};
`

export const Box = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray.superlight};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  gap: 0.5rem;
`

export const Value = styled.input`
  font-size: 1rem;
  width: 100%;
`

export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
`
