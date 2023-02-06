import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    accent: {
      light: '#F9CFCF',
      normal: '#E53935',
    },
    black: '#202020',
    gray: {
      dark: '#616161',
      light: '#E0E0E0',
      normal: '#BDBDBD',
      superlight: '#EEEEEE',
    },
    white: '#FFFFFF',
  },
}

export const device = {
  desktop: '1024px',
  desktopHd: '1440px',
  tablet: '768px',
}

export const StyledComponentsGlobalsProvider = createGlobalStyle`
* {
  box-sizing: border-box;
  color: ${theme.color.black};
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

button { 
  border: none
}

input {
  border: none;
  background-color: transparent;
  outline: none;
}

#__next {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  min-height: calc(100vh - 2rem);
  padding: 1rem;
}
`
