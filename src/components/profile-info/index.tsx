import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserResponseQuery } from 'src/pages/profile'

import { Input } from '@components/input'
import { Button } from '@components/button'

import EmailInputSvg from '../../../public/icons/email-input.svg'
import UserInputSvg from '../../../public/icons/user-input.svg'
import CarInputSvg from '../../../public/icons/car-input.svg'

import * as S from './styles'

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório'),
  cnh: yup.number().required('CNH obrigatória'),
})

type Props = {
  user: UserResponseQuery
  image: File
}

export function ProfileInfo({ user, image }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const handleUpdate: SubmitHandler<UserResponseQuery> = async (values) => {
    console.log({
      ...values,
      image,
    })
  }

  return (
    <S.Container onSubmit={handleSubmit(handleUpdate)}>
      <Input
        isIcon
        Icon={UserInputSvg}
        name="name"
        placeholder="Nome"
        error={errors.name}
        defaultValue={user.name}
        {...register('name')}
      />

      <Input
        isIcon
        Icon={EmailInputSvg}
        name="email"
        placeholder="E-mail"
        error={errors.email}
        defaultValue={user.email}
        {...register('email')}
      />
      <Input
        isIcon
        Icon={CarInputSvg}
        name="cnh"
        placeholder="CNH"
        error={errors.cnh}
        defaultValue={user.cnh}
        {...register('cnh')}
      />

      <Button type="submit" className="update_button" disabled={!isValid}>
        Salvar alterações
      </Button>
    </S.Container>
  )
}
