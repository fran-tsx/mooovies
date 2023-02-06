import { device } from 'configs/theme'
import styled from 'styled-components'

export const StyledPage = styled.main`
  align-items: flex-start;
  display: flex;
  flex: 1;
  gap: 2rem;
  justify-content: center;
  width: 100%;

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
  }
`

export const Section = styled.section`
  align-items: flex-start;
  border-left: 1px solid ${({ theme }) => theme.color.gray.light};
  border-right: 1px solid ${({ theme }) => theme.color.gray.light};
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  justify-content: flex-start;
  min-height: calc(100vh - 5.5625rem);
  padding: 0 2rem;

  @media (max-width: ${device.tablet}) {
    border-left: none;
    border-right: none;
    padding: 0;
    width: 100%;
  }
`
