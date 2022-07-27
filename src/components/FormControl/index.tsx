import { ReactNode } from 'react'

import * as S from './style'

type Props = {
  children: ReactNode
}

export function FormControl({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
