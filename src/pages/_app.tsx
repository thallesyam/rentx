import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import ReactModal from 'react-modal'

import { client } from 'src/services/apollo'

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import { ApolloProvider } from '@apollo/client'

ReactModal.setAppElement('#__next')

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}

        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
