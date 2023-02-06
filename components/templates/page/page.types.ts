import { CTSuggestions } from '@molecules/suggestions/suggestions.types'
import { ReactNode } from 'react'

export type CTPage = {
  children: ReactNode
  suggestions: CTSuggestions['sections']
  title?: string
}
