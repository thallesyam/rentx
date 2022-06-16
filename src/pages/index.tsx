import { ReactElement } from 'react'
import { Button } from '../components/Button'

import { Layout } from '../components/Layout'
import { Logo } from '../components/Logo'

import BgHome from '../../public/imagens/bg-home.png'
import FrameHome from '../../public/imagens/frame-home.png'

import * as S from '../styles/pages/Home'

export default function Home() {
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

          <Button>Começar agora</Button>
        </S.TextContainer>

        <S.ImageContainer>
          <img src={FrameHome} alt="Frame Home" className="frame" />
          <img src={BgHome} alt="Background Home" className="car" />
        </S.ImageContainer>
      </section>
    </S.Container>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>
}
