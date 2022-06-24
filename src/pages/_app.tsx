import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as ProviderUrql } from 'urql'
import ReactModal from 'react-modal'

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import { client, ssrCache } from 'src/services/urql'

ReactModal.setAppElement('#__next')

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ProviderUrql value={client}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}

        <GlobalStyle />
      </ThemeProvider>
    </ProviderUrql>
  )
}

export default MyApp
