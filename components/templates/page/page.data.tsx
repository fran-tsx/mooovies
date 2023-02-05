import { Schedule } from '@icons/schedule'
import { Search } from '@icons/search'
import { Stars } from '@icons/starts'
import { CTNavigation } from '@molecules/navigation/navigation.types'

export const navigation: CTNavigation['options'] = [
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

export const suggestions = [
  {
    cards: [
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
    ],
    title: 'Popular',
  },
  {
    cards: [
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
      {
        image: {
          alt: '',
          src: '',
        },
        subtitle: '',
        text: '',
        title: '',
      },
    ],
    title: 'Favorites',
  },
]
