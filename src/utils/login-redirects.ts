import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import nookies from 'nookies'

export function isLoggedRedirect(
  path: string,
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const isLogged = nookies.get(context)

  if (isLogged['@rentx:userId']) {
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
  const isLogged = nookies.get(context)

  if (!isLogged['@rentx:userId']) {
    return {
      redirect: {
        permanent: false,
        destination: path,
      },
    }
  }
}
