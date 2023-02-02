import { Schedule } from '@icons/schedule'
import { Search } from '@icons/search'
import { Stars } from '@icons/starts'

export const options = [
  {
    href: '/discover',
    icon: (active: boolean) => <Stars active={active} />,
    label: 'Discover',
  },
  {
    href: '/coming-soon',
    icon: (active: boolean) => <Schedule active={active} />,
    label: 'Coming soon',
  },
  {
    href: '/search',
    icon: (active: boolean) => <Search active={active} />,
    label: 'Search',
  },
]
