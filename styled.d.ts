import 'styled-components'
import { theme } from './configs/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: '#202020'
    }
  }
}
