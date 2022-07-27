import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'

import { client } from 'src/services/apollo'

import { Layout } from '@components/Layout'
import { CardCar } from '@components/CardCar'

import * as S from '@styles/pages/Results'

const ORDERS_PER_DATE_QUERY = gql`
  query checkOrdersPerDate($dateFrom: Int!, $dateTo: Int!) {
    orderItems(
      where: { dateFrom_gte: $dateFrom, AND: { dateTo_lte: $dateTo } }
    ) {
      order {
        orderItems {
          car {
            id
          }
        }
      }
    }
  }
`

const AVAILABLE_CAR_PER_DATE_QUERY = gql`
  query AvailableCarPerDate($cars: [ID!]) {
    cars(where: { id_not_in: $cars }) {
      id
      name
      price
      slug
      images {
        url
      }
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

export default function Results({ cars }: Props) {
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
          <CardCar key={car.id} car={car} isFilter />
        ))}
      </section>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { from, to } = context.query

  if (!from || !to) {
    return {
      props: {
        cars: [],
      },
    }
  }

  const { data: idsUnavailable } = await client.query({
    query: ORDERS_PER_DATE_QUERY,
    variables: {
      dateFrom: Number(from),
      dateTo: Number(to),
    },
  })

  const { data: idsAvailable } = await client.query({
    query: AVAILABLE_CAR_PER_DATE_QUERY,
    variables: {
      cars: idsUnavailable.orderItems ?? [],
    },
  })

  return {
    props: {
      cars: idsAvailable.cars ?? [],
    },
  }
}

Results.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Resultados" headerText="Resultados">
      {page}
    </Layout>
  )
}
