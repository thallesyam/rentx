import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'

import { client } from 'src/services/apollo'

import { Layout } from '@components/layout'

import CarAlcoholSvg from '../../public/icons/car-alcohol.svg'
import CarEletricSvg from '../../public/icons/car-eletric.svg'
import CarGasolineSvg from '../../public/icons/car-gasoline.svg'

import AudiMockupImage from '../../public/images/audi-mockup.png'

import * as S from '@styles/pages/Home'
import { CardCar } from '@components/card-car'

export const CARS_QUERY = gql`
  query Cars {
    cars {
      name
      price
      slug
      images {
        url
      }
      id
      company
      supply
    }
  }
`

export type Car = {
  name: string
  price: number
  slug: string
  images: {
    url: string
  }[]
  id: string
  company: string
  supply: string
}

type Props = {
  cars: Car[]
}

export default function Home({ cars }: Props) {
  return (
    <S.Container>
      <div>
        <h1>Carros disponíveis</h1>
        <p>
          Total {cars.length} {cars.length > 1 ? 'carros' : 'carro'}
        </p>
      </div>

      <section>
        {cars.map((car) => (
          <CardCar key={car.id} car={car} />
        ))}
      </section>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({
    query: CARS_QUERY,
  })

  return {
    props: {
      cars: data.cars ?? [],
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home" headerText="Início">
      {page}
    </Layout>
  )
}
