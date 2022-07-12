import { useState } from 'react'

import { Button } from '@components/button'
import { CarDetailsCard } from '@components/car-details-card'
import { Tabs } from '@components/tabs'

import CarSpeedometer from '../../../public/icons/car-speedometer.svg'
import CarSpeedsecond from '../../../public/icons/car-speedsecond.svg'
import CarCapacity from '../../../public/icons/car-capacity.svg'
import CarExchange from '../../../public/icons/car-exchange.svg'
import CarSupply from '../../../public/icons/car-supply.svg'
import CarHorsePower from '../../../public/icons/car-horsepower.svg'

import * as S from './style'

const tabs = [
  { id: 1, name: 'Sobre o carro', tabName: 'about' },
  { id: 2, name: 'Período', tabName: 'time' },
]

type CarInfos = {
  icon: JSX.Element
  info: string
}

type Props = {
  carInfos: CarInfos[]
  description: string
  price: number
}

export function CarDetailSection({ carInfos, description, price }: Props) {
  const [selectedTab, setSelectedTab] = useState('about')

  function handleChangeTab(selected: string) {
    setSelectedTab(selected)
  }

  return (
    <S.Container>
      <S.CardsContainer>
        {carInfos.map((car) => (
          <CarDetailsCard key={car.info} icon={car.icon} info={car.info} />
        ))}
      </S.CardsContainer>

      <section>
        <Tabs
          selectedTab={selectedTab}
          handleChangeTab={handleChangeTab}
          tabs={tabs}
        />

        {selectedTab === 'about' ? (
          <>
            <p>{description}</p>
            <Button type="submit" className="rent_button">
              Escolher período do aluguel
            </Button>
          </>
        ) : (
          <p>{price}</p>
        )}
      </section>
    </S.Container>
  )
}
