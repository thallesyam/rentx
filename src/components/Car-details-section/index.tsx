import { useState } from 'react'

import { useModal } from 'src/hooks/useModal'

import { Button } from '@components/Button'
import { CarDetailsCard } from '@components/Car-details-card'
import { Tabs } from '@components/Tabs'
import { CalendarModal } from '@components/Calendar-modal'
import { RentCheckout } from '@components/Rent-checkout'

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
  carId: string
}

export function CarDetailSection({
  carInfos,
  description,
  price,
  carId,
}: Props) {
  const [selectedTab, setSelectedTab] = useState('about')
  const [date, setDate] = useState(new Date())
  const { isOpen, toggle } = useModal()

  const isRentDate = date[0] !== undefined

  function handleChangeTab(selected: string) {
    setSelectedTab(selected)
  }

  function handleSelectDate() {
    toggle()
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
          isRentDate={isRentDate}
          selectedTab={selectedTab}
          handleChangeTab={handleChangeTab}
          tabs={tabs}
          toggle={toggle}
        />

        {selectedTab === 'about' ? (
          <>
            <p>{description}</p>
            <Button
              type="submit"
              className="rent_button"
              onClick={() => toggle()}
            >
              Escolher período do aluguel
            </Button>
          </>
        ) : (
          <RentCheckout
            from={date[0]}
            to={date[1]}
            price={price}
            carId={carId}
          />
        )}
      </section>

      <CalendarModal
        toggle={toggle}
        onClick={handleSelectDate}
        isOpen={isOpen}
        date={date}
        setDate={setDate}
        handleChangeTab={handleChangeTab}
      />
    </S.Container>
  )
}
