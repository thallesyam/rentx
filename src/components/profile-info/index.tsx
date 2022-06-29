import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserResponseQuery } from 'src/pages/profile'
import { uploadImage } from 'src/utils/upload-image'

import { useUpdateClientMutation } from 'src/generated/graphql'
import { useUserContext } from 'src/hooks/useUserContext'

import { Input } from '@components/input'
import { Button } from '@components/button'

import EmailInputSvg from '../../../public/icons/email-input.svg'
import UserInputSvg from '../../../public/icons/user-input.svg'
import CarInputSvg from '../../../public/icons/car-input.svg'

import * as S from './styles'
import { useCallback, useState } from 'react'
import { useModal } from 'src/hooks/useModal'
import { useRouter } from 'next/router'
import { SuccessModal } from '@components/success-modal'

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
  const router = useRouter()
  const [updateClient] = useUpdateClientMutation()
  const [error, isError] = useState(false)
  const { userId } = useUserContext()
  const { isOpen, toggle } = useModal()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const handleUpdate: SubmitHandler<UserResponseQuery> = async (values) => {
    const { cnh, name, email, image: actual_image } = values

    if (
      cnh === user.cnh &&
      name === user.name &&
      email === user.email &&
      actual_image === user.image
    ) {
      return
    }

    const upload = await uploadImage(image)

    if (!upload) {
      isError(true)
      return
    }

    const { data } = await updateClient({
      variables: {
        id: userId,
        name,
        cnh,
        email,
        image: upload.url,
      },
    })

    if (!data.updateClient.id) {
      isError(true)
      return
    }

    toggle()
  }

  const handleClickConfirmUpdate = useCallback(() => {
    toggle()
    router.push('/profile')
  }, [])

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

      <Button
        type="submit"
        className="update_button"
        disabled={!isValid || error}
      >
        Salvar alterações
      </Button>

      {isOpen && (
        <SuccessModal
          title="Feito!"
          content="Agora sua informações"
          type="update"
          onClick={handleClickConfirmUpdate}
        />
      )}
    </S.Container>
  )
}
