import CarAlcoholSvg from '../../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../../public/icons/car-gasoline.svg'
import ArrowRightSvg from '../../../public/icons/arrow-right.svg'
import AudiMockupImage from '../../../public/images/audi-mockup.png'

import * as S from './style'

type Props = {
  title: string
}

export function ScheduleCard() {
  return (
    <S.Container>
      <S.CarCard>
        <div>
          <div>
            <span>Audi</span>
            <p>RS 5 Coupé</p>
          </div>

          <div>
            <div>
              <span>Ao dia</span>
              <p>R$ 340</p>
            </div>

            <CarEletricSvg />
          </div>
        </div>

        <img src={AudiMockupImage} alt="Car" />
      </S.CarCard>

      <S.RentPeriod>
        <p>Período DO ALUGUEL</p>

        <div>
          <span>18 Jul 2021</span>
          <ArrowRightSvg />
          <span>20 Jul 2021</span>
        </div>
      </S.RentPeriod>
    </S.Container>
  )
}
