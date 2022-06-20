import { SignInCard } from '../signIn-card'

import LogoutSvg from '../../../public/icons/logout.svg'

import * as S from './style'

type Props = {
  title: string
}

export function Header({ title = '' }: Props) {
  const isLogged = false

  return (
    <S.Container>
      <section>
        <h1>{title}</h1>

        {isLogged ? <LogoutSvg /> : <SignInCard />}
      </section>
    </S.Container>
  )
}
