import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    black: '#202020',
  },
}

export const device = {
  desktop: '1024px',
  mobile: '768px',
  desktopHd: '1440px',
}

export const StyledComponentsGlobalsProvider = createGlobalStyle`
* {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Ubuntu', sans-serif;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}
`
