import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
