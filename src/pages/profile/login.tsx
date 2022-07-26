import { GetServerSideProps } from 'next'
import { ReactElement, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { setCookie } from 'nookies'

import { isLoggedRedirect } from 'src/utils/login-redirects'
import { useLoginLazyQuery } from 'src/generated/graphql'

import { FrameCar } from '@components/FrameCar'
import { Layout } from '@components/Layout'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { FormControl } from '@components/FormControl'
import { ButtonLink } from '@components/ButtonLink'

import BgLogin from '../../../public/images/bg-home.png'
import FrameLogin from '../../../public/images/frame-login.png'
import EmailInputSvg from '../../../public/icons/email-input.svg'
import PasswordInputSvg from '../../../public/icons/password-input.svg'

import * as S from '@styles/pages/Login'

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
  const [clients] = useLoginLazyQuery()
  const [error, setError] = useState<string | undefined>(undefined)

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
    const { email, password } = values

    const {
      data: { clients: client },
    } = await clients({
      variables: {
        email,
        password,
      },
    })

    if (client.length <= 0) {
      setError('Email ou senha inválido')
      return
    }

    const { id } = client?.[0]

    setCookie(null, '@rentx:userId', id, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    router.push('/profile')
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
              error={errors.email || error}
              {...register('email')}
            />

            <Input
              isIcon
              isPassword
              Icon={PasswordInputSvg}
              name="password"
              type={'password'}
              placeholder="Senha"
              error={errors.password || error}
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
  const isLogged = isLoggedRedirect('/profile', context)

  if (!!isLogged) {
    return isLogged
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
