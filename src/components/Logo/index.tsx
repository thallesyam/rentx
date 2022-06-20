import Link from 'next/link'

import LogoTextSvg from '../../../public/icons/logo-text.svg'
import LogoImageSvg from '../../../public/icons/logo-image.svg'

export function Logo({ isText = false }) {
  const LogoSvg = isText ? LogoTextSvg : LogoImageSvg

  return (
    <Link href="/">
      <a>
        <LogoSvg />
      </a>
    </Link>
  )
}
