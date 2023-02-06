import { ReactNode } from 'react'

export type CTCard = {
  image: {
    alt: string
    src: string
  }
  subtitle: string
  text: string | ReactNode
  title: string
}
