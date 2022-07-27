import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Dispatch, SetStateAction, useState } from 'react'

import { Button } from '@components/Button'
import { Input } from '@components/Input'

import CarAlcoholSvg from '../../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../../public/icons/car-gasoline.svg'
import CloseFilterSvg from '../../../public/icons/close-filter.svg'

import * as S from './style'

type Car = {
  name: string
  price: number
  slug: string
  images: {
    url: string
  }[]
  id: string
  company: string
  supply: string
  manual: boolean
}

type Props = {
  isFilterBarOpen: boolean
  cars: Car[]
  setIsFilterBarOpen: Dispatch<SetStateAction<boolean>>
  setFilteredCars: Dispatch<SetStateAction<Car[]>>
}

type FilterForm = {
  car_name: string
}

const loginSchema = yup.object().shape({
  name: yup.string(),
})

export function FilterBar({
  isFilterBarOpen,
  cars,
  setIsFilterBarOpen,
  setFilteredCars,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'all',
  })
  const [supply, setSupply] = useState(undefined)
  const [transmition, setTransmition] = useState(undefined)

  if (!isFilterBarOpen) {
    return
  }

  const handleFilter: SubmitHandler<FilterForm> = async (values) => {
    let newCars = cars

    if (values.car_name !== '' && values.car_name) {
      console.log('debug')
      newCars = newCars.filter((car) => {
        return car.name.includes(values.car_name)
      })
    }

    if (supply) {
      newCars = newCars.filter((car) => {
        return car.supply === supply
      })
    }

    if (transmition === 'manual') {
      newCars = newCars.filter((car) => {
        return car.manual === true
      })
    }

    if (transmition === 'automatic') {
      newCars = newCars.filter((car) => {
        return car.manual === false
      })
    }

    setFilteredCars(newCars)
    setIsFilterBarOpen(false)
  }

  function handleCleanFilters() {
    setFilteredCars(cars)
    setIsFilterBarOpen(false)
  }

  return (
    <S.Container>
      <div>
        <h3>Filtro</h3>
        <CloseFilterSvg onClick={() => setIsFilterBarOpen(false)} />
      </div>
      <S.Form onSubmit={handleSubmit(handleFilter)}>
        <Input
          name="car_name"
          type={'text'}
          {...register('car_name')}
          isIcon={false}
        />
        <section>
          <h3>Combustível</h3>

          <div className="supply">
            <Button
              type="button"
              onClick={() => setSupply('gasolina')}
              className={supply === 'gasolina' ? 'supply_active' : ''}
            >
              <CarGasolineSvg />
              <p>Gasolina</p>
            </Button>

            <Button
              type="button"
              onClick={() => setSupply('eletric')}
              className={supply === 'eletric' ? 'supply_active' : ''}
            >
              <CarEletricSvg />
              <p>Elétrico</p>
            </Button>

            <Button
              type="button"
              onClick={() => setSupply('alcohol')}
              className={supply === 'alcohol' ? 'supply_active' : ''}
            >
              <CarAlcoholSvg />
              <p>Alcool</p>
            </Button>
          </div>
        </section>
        <section>
          <h3>Transmissão</h3>

          <div className="transmition">
            <Button
              type="button"
              onClick={() => setTransmition('automatic')}
              className={
                transmition === 'automatic' ? 'transmition_active' : ''
              }
            >
              <p>Automático</p>
            </Button>

            <Button
              type="button"
              onClick={() => setTransmition('manual')}
              className={transmition === 'manual' ? 'transmition_active' : ''}
            >
              <p>Manual</p>
            </Button>
          </div>
        </section>
        <Button type="submit" className="login_button" disabled={!isValid}>
          Filtrar resultados
        </Button>
        <Button
          type="button"
          className="register_button"
          onClick={handleCleanFilters}
        >
          Limpar dados
        </Button>{' '}
      </S.Form>
    </S.Container>
  )
}
