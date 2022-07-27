import { ReactElement, useCallback } from 'react'
import { useRouter } from 'next/router'

import { Layout } from 'src/componentss/Layout'
import { Logo } from 'src/componentss/Logo'
import { FrameCar } from 'src/componentss/FrameCar'
import { Button } from 'src/componentss/Button'

import BgHome from '../../public/images/bg-home.png'
import FrameHome from '../../public/images/frame-home.png'

import * as S from '@styles/pages/Presentation'

export default function Presentation() {
  const router = useRouter()

  const handleClickRedirectHome = useCallback(() => {
    router.push('/home')
  }, [])

  return (
    <S.Container>
      <section>
        <S.TextContainer>
          <Logo isText />

          <h1>
            Alugue um <br /> carro de maneira <br /> simples e fácil
          </h1>
          <p>
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </p>

          <Button onClick={handleClickRedirectHome}>Começar agora</Button>
        </S.TextContainer>

        <FrameCar frameBg={FrameHome} carBg={BgHome} />
      </section>
    </S.Container>
  )
}

Presentation.getLayout = function getLayout(page: ReactElement) {
  return <Layout isSidebar={false}>{page}</Layout>
}
