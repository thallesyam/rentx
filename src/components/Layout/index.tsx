import Head from 'next/head'
import { ReactNode } from 'react'
import { Sidebar } from '../sidebar'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  isSidebar?: boolean
}

export function Layout({
  children,
  title = '',
  description = '',
  isSidebar = true,
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

      {isSidebar && <Sidebar />}

      <header></header>

      {children}
    </>
  )
}
