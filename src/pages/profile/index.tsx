import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Layout } from '@components/layout'

import * as S from '@styles/pages/Profile'
import { isNotLoggedRedirect } from 'src/utils/login-redirects'
import { getUserIdSSR } from 'src/utils/getUserIdSSR'

export default function Profile() {
  return <S.Container>Profile</S.Container>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isNotLogged = isNotLoggedRedirect('/profile/login', context)

  if (!!isNotLogged) {
    return isNotLogged
  }

  const userId = getUserIdSSR(context)
  console.log(userId)

  return {
    props: {},
  }
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Profile" headerText="Profile">
      {page}
    </Layout>
  )
}
