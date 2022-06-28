import { SignInCard } from '@components/signIn-card'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'
import { useCallback } from 'react'
import { useUserContext } from 'src/hooks/useUserContext'

import LogoutSvg from '../../../public/icons/logout.svg'

import * as S from './style'

type Props = {
  title: string
}

export function Header({ title = '' }: Props) {
  const router = useRouter()
  const { isLogged } = useUserContext()

  const handleLogout = useCallback(() => {
    destroyCookie(null, '@rentx:userId')
    router.push('/home')
  }, [])

  return (
    <S.Container>
      <section>
        <h3>{title}</h3>

        {isLogged ? <LogoutSvg onClick={handleLogout} /> : <SignInCard />}
      </section>
    </S.Container>
  )
}
