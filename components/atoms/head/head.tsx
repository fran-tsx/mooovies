import NextHead from 'next/head'
import { FC } from 'react'
import { CTHead } from './head.types'

export const Head: FC<CTHead> = ({
  description = 'Find your favorite movie',
  title = 'mooovies',
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='shortcut icon' href='/favicon.png' type='image/png' />
  </NextHead>
)
