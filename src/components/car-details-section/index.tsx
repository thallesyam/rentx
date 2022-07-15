import { useState } from 'react'

import { useModal } from 'src/hooks/useModal'

import { Button } from '@components/button'
import { CarDetailsCard } from '@components/car-details-card'
import { Tabs } from '@components/tabs'
import { CalendarModal } from '@components/calendar-modal'

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
          <p>{price}</p>
        )}
      </section>

      <CalendarModal
        onClick={handleSelectDate}
        isOpen={isOpen}
        date={date}
        setDate={setDate}
      />
    </S.Container>
  )
}
