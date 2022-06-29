import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserResponseQuery } from 'src/pages/profile'

import { Button } from '@components/button'
import { Input } from '@components/input'

import PasswordInputSvg from '../../../public/icons/password-input.svg'

import * as S from './styles'

const registerSchema = yup.object().shape({
  actual_password: yup.string().required('Senha obrigatória'),
  password: yup.string().required('Senha obrigatória'),
  confirm_password: yup.string().required('Senha obrigatória'),
})

type Props = {
  password: string
  image: File
}

export function PasswordChange({ password, image }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const handleUpdatePassword: SubmitHandler<UserResponseQuery> = async (
    values
  ) => {}

  return (
    <S.Container onSubmit={handleSubmit(handleUpdatePassword)}>
      <Input
        isIcon
        isPassword
        Icon={PasswordInputSvg}
        name="actual_password"
        type={'password'}
        placeholder="Senha atual"
        error={errors.actual_password}
        {...register('actual_password')}
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
      <Input
        isIcon
        isPassword
        Icon={PasswordInputSvg}
        name="confirm_password"
        type={'password'}
        placeholder="Repetir senha"
        error={errors.confirm_password}
        {...register('confirm_password')}
      />

      <Button
        type="submit"
        className="change_password_button"
        disabled={!isValid}
      >
        Salvar alterações
      </Button>
    </S.Container>
  )
}
