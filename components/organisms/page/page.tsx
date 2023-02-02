import { Footer } from '@atoms/footer/footer'
import { Head } from '@atoms/head/head'
import { Navigation } from '@molecules/navigation/navigation'
import { Suggestions } from '@molecules/suggestions/suggestions'
import { FC } from 'react'
import { Section, StyledPage } from './page.styles'
import { CTPage } from './page.types'

export const Page: FC<CTPage> = ({ children, title }) => (
  <>
    <Head title={title} />
    <StyledPage>
      <Navigation />
      <Section>{children}</Section>
      <Suggestions />
    </StyledPage>
    <Footer />
  </>
)
