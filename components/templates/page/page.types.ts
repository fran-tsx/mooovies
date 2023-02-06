import { CTSuggestions } from '@molecules/suggestions/suggestions.types'
import { ReactNode } from 'react'
import { DTMovie } from 'services/movies/movies.types'

export type CTPage = {
  children: ReactNode
  suggestions: CTSuggestions['sections']
  title?: string
}
