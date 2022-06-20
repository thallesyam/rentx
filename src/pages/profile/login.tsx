import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Layout } from '../../components/layout'

import * as S from '../../styles/pages/Login'

export default function Login() {
  return <S.Container>Login</S.Container>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isLogged = false

  if (isLogged) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
    }
  }

  return {
    props: {},
  }
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Login" headerText="Perfil">
      {page}
    </Layout>
  )
}
