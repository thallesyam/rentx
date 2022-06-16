import Link from 'next/link'

import LogoSvg from '../../../public/icons/logo.svg'

export function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoSvg />
      </a>
    </Link>
  )
}
