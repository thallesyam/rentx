import { ReactElement, useCallback } from 'react'
import { Button } from '../components/Button'

import { Layout } from '../components/Layout'
import { Logo } from '../components/Logo'

import BgHome from '../../public/imagens/bg-home.png'
import FrameHome from '../../public/imagens/frame-home.png'

import * as S from '../styles/pages/Presentation'
import { useRouter } from 'next/router'

export default function Presentation() {
  const router = useRouter()

  const handleClickRedirectHome = useCallback(() => {
    router.push('/home')
  }, [])

  return (
    <S.Container>
      <section>
        <S.TextContainer>
          <Logo />

          <h1>
            Alugue um <br /> carro de maneira <br /> simples e fácil
          </h1>
          <p>
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </p>

          <Button onClick={handleClickRedirectHome}>Começar agora</Button>
        </S.TextContainer>

        <S.ImageContainer>
          <img src={FrameHome} alt="Frame Home" className="frame" />
          <img src={BgHome} alt="Background Home" className="car" />
        </S.ImageContainer>
      </section>
    </S.Container>
  )
}

Presentation.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
