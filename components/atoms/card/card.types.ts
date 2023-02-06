import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export type CTCard = {
  image: {
    alt: string
    src: string
  }
  link: LinkProps
  subtitle: string
  text: string | ReactNode
  title: string
}
