import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { FrameCar } from '@components/frame-car'
import { Layout } from '@components/layout'
import { Input } from '@components/input'
import { Button } from '@components/button'

import BgLogin from '../../../public/images/bg-home.png'
import FrameLogin from '../../../public/images/frame-login.png'
import EmailInputSvg from '../../../public/icons/email-input.svg'
import PasswordInputSvg from '../../../public/icons/password-input.svg'

import * as S from '@styles/pages/Login'
import { FormControl } from '@components/form-control'
import { ButtonLink } from '@components/button-link'

export default function Login() {
  return (
    <S.Container>
      <section>
        <FrameCar frameBg={FrameLogin} carBg={BgLogin} />

        <S.FormLogin>
          <h1>Estamos quase lá.</h1>
          <p>Faça seu login para começar uma experiência incrível.</p>

          <FormControl>
            <Input
              isIcon
              Icon={EmailInputSvg}
              name="email"
              type="email"
              placeholder="E-mail"
            />

            <Input
              isIcon
              isPassword
              Icon={PasswordInputSvg}
              name="password"
              type={'password'}
              placeholder="Senha"
            />
          </FormControl>

          <ButtonLink text="Esqueci minha senha" />

          <Button className="login_button">Login</Button>
          <Button className="register_button">Criar conta gratuita</Button>
        </S.FormLogin>
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
