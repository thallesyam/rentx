import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'

import * as S from './style'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  isSidebar?: boolean
  headerText?: string
  bgColor?: string
}

export function Layout({
  children,
  title = '',
  description = '',
  isSidebar = true,
  headerText = '',
  bgColor = '#F4F5F6',
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

      <S.Container bgColor={bgColor}>
        {isSidebar && <Sidebar />}

        <section>
          {headerText !== '' && <Header title={headerText} />}

          {children}
        </section>
      </S.Container>
    </>
  )
}
