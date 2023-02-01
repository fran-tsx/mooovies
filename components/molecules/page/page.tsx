import { Head } from '@atoms/head/head'
import { Header } from '@atoms/header/header'
import { FC } from 'react'
import { CTPage } from './page.types'

export const Page: FC<CTPage> = ({ children }) => (
  <>
    <Head />
    <Header />
    <main>{children}</main>
  </>
)
