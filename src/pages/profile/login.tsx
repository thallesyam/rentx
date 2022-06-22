import { GetServerSideProps } from 'next'
import { ReactElement, useCallback } from 'react'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

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
import { useRouter } from 'next/router'

type ILoginForm = {
  email: string
  password: string
}

const loginSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'all',
  })

  const handleClickRedirectRegister = useCallback(() => {
    router.push('/profile/register')
  }, [])

  const handleLogin: SubmitHandler<ILoginForm> = async (values) => {
    console.log(values)
  }

  return (
    <S.Container>
      <section>
        <FrameCar frameBg={FrameLogin} carBg={BgLogin} />

        <S.FormLogin onSubmit={handleSubmit(handleLogin)}>
          <h1>Estamos quase lá.</h1>
          <p>Faça seu login para começar uma experiência incrível.</p>
          <FormControl>
            <Input
              isIcon
              Icon={EmailInputSvg}
              name="email"
              placeholder="E-mail"
              error={errors.email}
              {...register('email')}
            />

            <Input
              isIcon
              isPassword
              Icon={PasswordInputSvg}
              name="password"
              type={'password'}
              placeholder="Senha"
              error={errors.password}
              {...register('password')}
            />
          </FormControl>
          <ButtonLink text="Esqueci minha senha" />
          <Button type="submit" className="login_button" disabled={!isValid}>
            Login
          </Button>
          <Button
            type="button"
            className="register_button"
            onClick={handleClickRedirectRegister}
          >
            Criar conta gratuita
          </Button>{' '}
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
