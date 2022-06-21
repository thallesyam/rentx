import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

import PasswordInputSvg from '../../../public/icons/password-input.svg'
import HiddenPasswordInputSvg from '../../../public/icons/hidden-password-input.svg'

import * as S from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  isIcon?: boolean
  isPassword?: boolean
  Icon?: any
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, isIcon, isPassword, Icon, type, label, error = null, ...rest },
  ref
) => {
  const [passwordInputType, setPasswordInputType] = useState(true)

  function handleClickOnInputPassword() {
    setPasswordInputType(!passwordInputType)
  }

  const typePassword = passwordInputType ? 'password' : 'name'

  return (
    <S.Container>
      {isIcon && <label htmlFor={name}>{<Icon />}</label>}

      <div>
        <input
          name={name}
          id={name}
          type={isPassword ? typePassword : type}
          ref={ref}
          {...rest}
        />
        {isPassword && (
          <button onClick={handleClickOnInputPassword}>
            <HiddenPasswordInputSvg />
          </button>
        )}
      </div>
    </S.Container>
  )
}

export const Input = forwardRef(InputBase)
