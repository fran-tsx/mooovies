import { ReactElement } from 'react'

type CTNavigationOptions = {
  href: string
  icon: (active: boolean) => ReactElement
  label: string
}

export type CTNavigation = {
  options: Array<CTNavigationOptions>
}
