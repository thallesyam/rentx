import Link from 'next/link'
import ProfileSvg from '../../../public/icons/profile.svg'

import * as S from './style'

export function SignInCard() {
  return (
    <Link href="/profile/login">
      <S.Container>
        <p>Faça o login</p>

        <div>
          <ProfileSvg />
        </div>
      </S.Container>
    </Link>
  )
}
