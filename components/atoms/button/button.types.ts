import { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { CSSProp } from 'styled-components'

export type CTButton = {
  children: ReactNode
  disabled?: boolean
  fill?: boolean
  fourth?: boolean
  link?: LinkProps
  onClick?: () => void
  rel?: string
  secondary?: boolean
  styles?: CSSProp
  target?: string
  tertiary?: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
}
