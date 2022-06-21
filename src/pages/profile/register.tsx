import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Layout } from '../../components/layout'

import * as S from '../../styles/pages/Register'

export default function Register() {
  return <S.Container>Register</S.Container>
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

Register.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Registrar" headerText="Perfil">
      {page}
    </Layout>
  )
}
