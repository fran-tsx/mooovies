import { StyledComponentsGlobalsProvider, theme } from 'configs/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <StyledComponentsGlobalsProvider />
      <Component {...pageProps} {...inter} />
    </ThemeProvider>
  </>
)

export default App
