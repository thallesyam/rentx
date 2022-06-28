import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import nookies from 'nookies'

export function getUserIdSSR(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const isLogged = nookies.get(context)

  return isLogged['@rentx:userId']
}
