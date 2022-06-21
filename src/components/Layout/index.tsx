import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'

import * as S from './style'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  isSidebar?: boolean
  headerText?: string
}

export function Layout({
  children,
  title = '',
  description = '',
  isSidebar = true,
  headerText = '',
}: Props) {
  return (
    <>
      <Head>
        <title>{`RentX ${title && `| ${title}`}`}</title>

        {description && <meta name="description" content={description} />}

        <meta name="keywords" content="Nextjs, Javascript, React, CSS" />
        <meta name="author" content="Thalles Ian" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <S.Container>
        {isSidebar && <Sidebar />}

        <section>
          {headerText !== '' && <Header title={headerText} />}

          {children}
        </section>
      </S.Container>
    </>
  )
}
