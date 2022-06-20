import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Logo } from '../logo'

import HomeSvg from '../../../public/icons/home.svg'
import FilterSvg from '../../../public/icons/filter.svg'
import ProfileSvg from '../../../public/icons/profile.svg'

import * as S from './style'
import Link from 'next/link'

const icons = [
  { id: 1, name: 'Home', link: '/home', Icon: HomeSvg },
  { id: 3, name: 'Filter', link: '/filter', Icon: FilterSvg },
  { id: 2, name: 'Profile', link: '/profile', Icon: ProfileSvg },
]

export function Sidebar() {
  const router = useRouter()

  const handleClickRedirectHome = useCallback(() => {
    router.push('/home')
  }, [])

  return (
    <S.Container>
      <S.LogoContainer onClick={handleClickRedirectHome}>
        <Logo />
      </S.LogoContainer>

      <S.IconsContainer>
        {icons.map((icon) => (
          <Link href={icon.link} key={icon.id}>
            <a
              title={icon.name}
              className={icon.link === router.asPath ? 'isActive' : undefined}
            >
              <icon.Icon />
            </a>
          </Link>
        ))}
      </S.IconsContainer>
    </S.Container>
  )
}
