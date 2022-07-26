import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

import HiddenPasswordInputSvg from '../../../public/icons/hidden-password-input.svg'

import * as S from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  isIcon?: boolean
  isPassword?: boolean
  Icon?: any
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, isIcon, isPassword, Icon, type, error = null, ...rest },
  ref
) => {
  const [passwordInputType, setPasswordInputType] = useState(true)

  function handleClickOnInputPassword() {
    setPasswordInputType(!passwordInputType)
  }

  const typePassword = passwordInputType ? 'password' : 'name'

  return (
    <>
      <S.Container>
        {isIcon && (
          <S.LabelIcon htmlFor={name} error={!!error}>
            {<Icon />}
          </S.LabelIcon>
        )}

        <div>
          <input
            name={name}
            id={name}
            type={isPassword ? typePassword : type}
            ref={ref}
            {...rest}
          />
          {isPassword && (
            <button type="button" onClick={handleClickOnInputPassword}>
              <HiddenPasswordInputSvg />
            </button>
          )}
        </div>
      </S.Container>
    </>
  )
}

export const Input = forwardRef(InputBase)
