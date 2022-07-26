import { Button } from '../Button'
import { ButtonHTMLAttributes } from 'react'

import * as S from './style'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
}

export function ButtonLink(props: Props) {
  const { text } = props

  return (
    <S.Container>
      <Button {...props}>{text}</Button>
    </S.Container>
  )
}
