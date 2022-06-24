import { GetServerSideProps } from 'next'
import { ReactElement, useCallback } from 'react'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useModal } from 'src/hooks/useModal'
import {
  useCreateClientMutation,
  usePublishClientMutation,
} from 'src/generated/graphql'

import { FrameCar } from '@components/frame-car'
import { Layout } from '@components/layout'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { FormControl } from '@components/form-control'
import { SuccessModal } from '@components/success-modal'

import BgRegister from '../../../public/images/bg-register.png'
import FrameLogin from '../../../public/images/frame-login.png'
import EmailInputSvg from '../../../public/icons/email-input.svg'
import PasswordInputSvg from '../../../public/icons/password-input.svg'
import CarInputSvg from '../../../public/icons/car-input.svg'
import UserInputSvg from '../../../public/icons/user-input.svg'

import * as S from '@styles/pages/Register'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'

type IRegisterForm = {
  name: string
  email: string
  cnh: number
  password: string
  password_confirm: string
}

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório'),
  cnh: yup.number().required('CNH obrigatória'),
  password: yup.string().required('Senha obrigatória'),
  password_confirm: yup.string().required('Confirmação de senha obrigatória'),
})

export default function Register() {
  const router = useRouter()
  const { isOpen, toggle } = useModal()
  const [{}, createClient] = useCreateClientMutation()
  const [{}, publishClient] = usePublishClientMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const handleRegister: SubmitHandler<IRegisterForm> = async (values) => {
    const { cnh, name, email, password } = values

    const data = {
      name,
      email,
      cnh,
      password,
    }

    try {
      const {
        data: { createClient: userDraft },
      } = await createClient({
        data,
      })

      const { id: userId } = userDraft

      if (!userId) {
        return
      }

      await publishClient({ data: { id: userId } })

      setCookie(null, '@rentx:userId', userId, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickConfirmRegister = useCallback(() => {
    toggle()
    router.push('/profile')
  }, [])

  return (
    <S.Container>
      <section>
        <S.FormRegister onSubmit={handleSubmit(handleRegister)}>
          <h1>Crie sua conta</h1>
          <p>Faça seu cadastro de forma rápida e fácil.</p>

          <FormControl>
            <Input
              isIcon
              Icon={UserInputSvg}
              name="name"
              placeholder="Nome"
              error={errors.name}
              {...register('name')}
            />

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
              Icon={CarInputSvg}
              name="cnh"
              placeholder="CNH"
              error={errors.cnh}
              {...register('cnh')}
            />

            <Input
              isIcon
              isPassword
              Icon={UserInputSvg}
              name="password"
              type={'password'}
              placeholder="Senha"
              error={errors.password}
              {...register('password')}
            />

            <Input
              isIcon
              isPassword
              Icon={PasswordInputSvg}
              name="password_confirm"
              type={'password'}
              placeholder="Repetir senha"
              error={errors.password_confirm}
              {...register('password_confirm')}
            />
          </FormControl>

          <Button type="submit" className="register_button" disabled={!isValid}>
            Cadastrar
          </Button>
        </S.FormRegister>

        <FrameCar frameBg={FrameLogin} carBg={BgRegister} />
      </section>

      {isOpen && (
        <SuccessModal
          title="Conta criada"
          content="Agora você parte da RentX."
          type="register"
          onClick={handleClickConfirmRegister}
        />
      )}
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

Register.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Criar conta" headerText="Perfil">
      {page}
    </Layout>
  )
}
