import { ReactElement } from 'react'
import { Layout } from '@components/layout'

import CarAlcoholSvg from '../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../public/icons/car-gasoline.svg'

import AudiMockupImage from '../../public/images/audi-mockup.png'

import * as S from '@styles/pages/Home'

export default function Home() {
  return (
    <S.Container>
      <div>
        <h1>Carros disponíveis</h1>
        <p>Total 12 carros</p>
      </div>

      <section>
        <div>
          <img src={AudiMockupImage} alt="" />

          <div className="car-cardinfo-container">
            <div>
              <span>Audi</span>
              <p>RS 5 Coupé</p>
            </div>

            <div>
              <span>Ao dia</span>
              <p className="price">R$ 340</p>
            </div>

            <CarGasolineSvg />
          </div>
        </div>

        <div>
          <img src={AudiMockupImage} alt="" />

          <div className="car-cardinfo-container">
            <div>
              <span>Audi</span>
              <p>RS 5 Coupé</p>
            </div>

            <div>
              <span>Ao dia</span>
              <p className="price">R$ 340</p>
            </div>

            <CarEletricSvg />
          </div>
        </div>

        <div>
          <img src={AudiMockupImage} alt="" />

          <div className="car-cardinfo-container">
            <div>
              <span>Audi</span>
              <p>RS 5 Coupé</p>
            </div>

            <div>
              <span>Ao dia</span>
              <p className="price">R$ 340</p>
            </div>

            <CarAlcoholSvg />
          </div>
        </div>
      </section>
    </S.Container>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home" headerText="Início">
      {page}
    </Layout>
  )
}
