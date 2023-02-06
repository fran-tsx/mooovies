import 'styled-components'
import { theme } from './configs/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      accent: {
        light: '#F9CFCF'
        normal: '#E53935'
      }
      black: '#202020'
      gray: {
        dark: '#616161'
        light: '#E0E0E0'
        normal: '#BDBDBD'
        superlight: '#EEEEEE'
      }
      white: '#FFFFFF'
    }
  }
}
