import CarAlcoholSvg from '../../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../../public/icons/car-gasoline.svg'
import ArrowRightSvg from '../../../public/icons/arrow-right.svg'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './style'
import { format, fromUnixTime } from 'date-fns'

type Props = {
  dateTo: number
  dateFrom: number
  car: {
    id: string
    company: string
    price: number
    name: string
    supply: string
    images: {
      url: string
    }
  }
}

const svgSuplly = {
  gasolina: CarGasolineSvg,
  eletric: CarEletricSvg,
  alcohol: CarAlcoholSvg,
}

export function ScheduleCard({ car, dateFrom, dateTo }: Props) {
  const Supply = svgSuplly['gasolina']

  const fromFormated = format(
    fromUnixTime(dateFrom) ?? new Date(),
    "dd MMMM yyyy'",
    {
      locale: ptBR,
    }
  )

  const toFormated = format(
    fromUnixTime(dateTo) ?? new Date(),
    "dd MMMM yyyy'",
    {
      locale: ptBR,
    }
  )

  return (
    <S.Container>
      <S.CarCard>
        <div>
          <div>
            <span>{car.company}</span>
            <p>{car.name}</p>
          </div>

          <div>
            <div>
              <span>Ao dia</span>
              <p>R$ {car.price}</p>
            </div>

            <Supply />
          </div>
        </div>

        <img src={car.images[0].url} alt="Car" />
      </S.CarCard>

      <S.RentPeriod>
        <p>Período DO ALUGUEL</p>

        <div>
          <span>{fromFormated}</span>
          <ArrowRightSvg />
          <span>{toFormated}</span>
        </div>
      </S.RentPeriod>
    </S.Container>
  )
}
