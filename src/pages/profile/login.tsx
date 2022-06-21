import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { FrameCar } from '@components/frame-car'
import { Layout } from '@components/layout'

import BgLogin from '../../../public/images/bg-home.png'
import FrameLogin from '../../../public/images/frame-login.png'

import * as S from '@styles/pages/Login'

export default function Login() {
  return (
    <S.Container>
      <section>
        <FrameCar frameBg={FrameLogin} carBg={BgLogin} />
      </section>
    </S.Container>
  )
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
