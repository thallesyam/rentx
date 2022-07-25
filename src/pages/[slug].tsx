import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { gql } from '@apollo/client'

import { client } from 'src/services/apollo'
import { CARS_QUERY } from './home'

import { Layout } from '@components/layout'
import { CarDetailSection } from '@components/car-details-section'

import CarSpeedometer from '../../public/icons/car-speedometer.svg'
import CarSpeedsecond from '../../public/icons/car-speedsecond.svg'
import CarCapacity from '../../public/icons/car-capacity.svg'
import CarExchange from '../../public/icons/car-exchange.svg'
import CarSupply from '../../public/icons/car-supply.svg'
import CarHorsePower from '../../public/icons/car-horsepower.svg'
import ArrowLeft from '../../public/icons/arrow-left.svg'

import * as S from '@styles/pages/Car'

const CAR_QUERY = gql`
  query Car($slug: String!) {
    car(where: { slug: $slug }) {
      id
      name
      company
      capacity
      description
      kmH
      kmS
      price
      slug
      supply
      manual
      horsePower
      images {
        url
      }
    }
  }
`

type Car = {
  id: string
  name: string
  company: string
  capacity: number
  description: string
  kmH: number
  kmS: number
  price: number
  slug: string
  supply: string
  manual: boolean
  horsePower: number
  images: {
    url: string
  }[]
}

type Props = {
  car: Car
}

export default function Car({ car }: Props) {
  const carInfos = [
    { icon: <CarSpeedometer />, info: `${car.kmH}km/h` },
    { icon: <CarSpeedsecond />, info: `${car.kmS}s` },
    { icon: <CarSupply />, info: car.supply },
    { icon: <CarExchange />, info: car.manual ? 'Manual' : 'Auto' },
    { icon: <CarCapacity />, info: `${car.capacity} pessoas` },
    { icon: <CarHorsePower />, info: `${car.horsePower} HP` },
  ]

  return (
    <S.Container>
      <header>
        <ArrowLeft />

        <section>
          <div>
            <span>{car.company}</span>
            <h1>{car.name}</h1>
          </div>

          <div>
            <span>Ao dia</span>
            <p>R$ {car.price}</p>
          </div>
        </section>
      </header>

      <section>
        <div>
          <img src={car.images[0].url} alt={car.name} />
        </div>

        <CarDetailSection
          carInfos={carInfos}
          description={car.description}
          price={car.price}
          carId={car.id}
        />
      </section>
    </S.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: CARS_QUERY,
  })

  const { cars } = data

  const paths = cars.map((car: Car) => ({
    params: { slug: car.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const { data } = await client.query({
    query: CAR_QUERY,
    variables: {
      slug,
    },
  })

  return {
    props: {
      car: data.car ?? {},
    },
  }
}

Car.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={(page.props?.car.name as string) ?? ''} bgColor="#ffffff">
      {page}
    </Layout>
  )
}
