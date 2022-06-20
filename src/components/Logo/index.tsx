import Link from 'next/link'

import LogoTextSvg from '../../../public/icons/logo-text.svg'
import LogoImageSvg from '../../../public/icons/logo-image.svg'

type Props = {
  isText?: boolean
}

export function Logo({ isText = false }: Props) {
  const LogoSvg = isText ? LogoTextSvg : LogoImageSvg

  return (
    <Link href="/">
      <a>
        <LogoSvg />
      </a>
    </Link>
  )
}
