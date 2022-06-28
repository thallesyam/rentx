import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getUserIdSSR } from './getUserIdSSR'

export function isLoggedRedirect(
  path: string,
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const isLogged = getUserIdSSR(context)

  if (isLogged) {
    return {
      redirect: {
        permanent: false,
        destination: path,
      },
    }
  }
}

export function isNotLoggedRedirect(
  path: string,
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const isLogged = getUserIdSSR(context)

  if (!isLogged) {
    return {
      redirect: {
        permanent: false,
        destination: path,
      },
    }
  }
}
