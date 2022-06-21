import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Link from 'next/link'

import { Logo } from '@components/logo'

import HomeSvg from '../../../public/icons/home.svg'
import FilterSvg from '../../../public/icons/filter.svg'
import ProfileSvg from '../../../public/icons/profile.svg'

import * as S from './style'

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
              className={
                router.asPath.includes(icon.link) ? 'isActive' : undefined
              }
            >
              <icon.Icon />
            </a>
          </Link>
        ))}
      </S.IconsContainer>
    </S.Container>
  )
}
