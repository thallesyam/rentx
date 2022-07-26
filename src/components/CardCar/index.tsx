import Link from 'next/link'
import { Car } from 'src/pages/home'

import CarAlcoholSvg from '../../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../../public/icons/car-gasoline.svg'

import * as S from './style'

type Props = {
  car: Car
}

const svgSuplly = {
  gasolina: CarGasolineSvg,
  eletric: CarEletricSvg,
  alcohol: CarAlcoholSvg,
}

export function CardCar({ car }: Props) {
  const Supply = svgSuplly[car.supply] ?? ''

  return (
    <Link href={car.slug} passHref>
      <S.Container>
        <img src={car.images[0].url} alt={car.name} />

        <div className="car-cardinfo-container">
          <div>
            <span>{car.company}</span>
            <p>{car.name}</p>
          </div>

          <div>
            <span>Ao dia</span>
            <p className="price">R$ {car.price}</p>
          </div>

          <Supply />
        </div>
      </S.Container>
    </Link>
  )
}
