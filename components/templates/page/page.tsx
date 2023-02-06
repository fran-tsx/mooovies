import { Footer } from '@atoms/footer/footer'
import { Head } from '@atoms/head/head'
import { Navigation } from '@molecules/navigation/navigation'
import { Suggestions } from '@molecules/suggestions/suggestions'
import { FC } from 'react'
import { navigation } from './page.data'
import { Section, StyledPage } from './page.styles'
import { CTPage } from './page.types'

export const Page: FC<CTPage> = ({ children, suggestions, title }) => (
  <>
    <Head title={title} />
    <StyledPage>
      <Navigation options={navigation} />
      <Section>{children}</Section>
      <Suggestions sections={suggestions} />
    </StyledPage>
    <Footer />
  </>
)
