import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Layout } from '../components/layout'

import * as S from '../styles/pages/Profile'

export default function Profile() {
  return <S.Container>Profile</S.Container>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isLogged = false

  if (!isLogged) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Profile" headerText="Profile">
      {page}
    </Layout>
  )
}
