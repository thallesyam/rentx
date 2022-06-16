import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  description?: string
}

export function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{`RentX | ${title}`}</title>

        {description && <meta name="description" content={description} />}

        <meta name="keywords" content="Nextjs, Javascript, React, CSS" />
        <meta name="author" content="Thalles Ian" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {children}
    </>
  )
}
