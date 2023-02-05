import styled from 'styled-components'

export const StyledPage = styled.main`
  align-items: flex-start;
  display: flex;
  flex: 1;
  gap: 2rem;
  justify-content: center;
  width: 100%;
`

export const Section = styled.section`
  border-left: 1px solid ${({ theme }) => theme.color.gray.light};
  border-right: 1px solid ${({ theme }) => theme.color.gray.light};
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: calc(100vh - 5.5625rem);
`
