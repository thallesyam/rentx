import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '@components/button'
import { Input } from '@components/input'

import PasswordInputSvg from '../../../public/icons/password-input.svg'

import * as S from './styles'
import { uploadImage } from 'src/utils/upload-image'
import { useCallback, useState } from 'react'
import { useUpdatePasswordMutation } from 'src/generated/graphql'
import { useModal } from 'src/hooks/useModal'
import { useUserContext } from 'src/hooks/useUserContext'
import { SuccessModal } from '@components/success-modal'

const registerSchema = yup.object().shape({
  actual_password: yup.string().required('Senha obrigatória'),
  password: yup.string().required('Senha obrigatória'),
  confirm_password: yup.string().required('Senha obrigatória'),
})

type Props = {
  password: string
  image: File
  userImage: string
}

export function PasswordChange({
  password: userPassword,
  userImage,
  image,
}: Props) {
  const [error, setIsError] = useState<string | undefined>()
  const { userId } = useUserContext()
  const [updateClient] = useUpdatePasswordMutation()
  const { isOpen, toggle } = useModal()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const handleUpdatePassword: SubmitHandler<any> = async (values) => {
    const { password, actual_password, confirm_password } = values

    if (userPassword !== actual_password) {
      setIsError('A senha digitada não é igual a atual')
      return
    }

    if (password !== confirm_password) {
      setIsError('As senhas não coincidem')
      return
    }

    try {
      if (!image) {
        await updateClient({
          variables: {
            id: userId,
            password: password,
            image: userImage,
          },
        })

        toggle()
        return
      }

      const upload = await uploadImage(image)

      await updateClient({
        variables: {
          id: userId,
          password: password,
          image: upload.url ?? userImage,
        },
      })

      toggle()
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const handleClickConfirmUpdate = useCallback(() => {
    toggle()
    window.location.reload()
  }, [])

  return (
    <S.Container onSubmit={handleSubmit(handleUpdatePassword)}>
      <Input
        isIcon
        isPassword
        Icon={PasswordInputSvg}
        name="actual_password"
        type={'password'}
        placeholder="Senha atual"
        error={errors.actual_password || error}
        {...register('actual_password')}
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
      <Input
        isIcon
        isPassword
        Icon={PasswordInputSvg}
        name="confirm_password"
        type={'password'}
        placeholder="Repetir senha"
        error={errors.confirm_password || error}
        {...register('confirm_password')}
      />

      <Button
        type="submit"
        className="change_password_button"
        disabled={!isValid}
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
