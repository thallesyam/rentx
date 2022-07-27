import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { format, fromUnixTime } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { client } from 'src/services/apollo'

import { Layout } from '@components/Layout'
import { CardCar } from '@components/CardCar'

import ArrowRightCalendarSvg from '../../../public/icons/arrow-right-calendar.svg'
import CalendarSvg from '../../../public/icons/calendar.svg'

import * as S from '@styles/pages/Results'
import { Button } from '@components/Button'
import { useRouter } from 'next/router'

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
  from: number
  to: number
}

export default function Results({ cars, from, to }: Props) {
  const router = useRouter()

  const fromFormated = format(
    fromUnixTime(from) ?? new Date(),
    "dd MMMM yyyy'",
    {
      locale: ptBR,
    }
  )

  const toFormated = format(fromUnixTime(to) ?? new Date(), "dd MMMM yyyy'", {
    locale: ptBR,
  })

  function handleClickReset() {
    router.push('/filter')
  }

  return (
    <S.Container>
      <div>
        <h1>Carros disponíveis</h1>
        <section className="from_to_container">
          <div>
            <div>
              <p>DE</p>
              <span>{fromFormated}</span>
            </div>

            <ArrowRightCalendarSvg />

            <div>
              <p>ATÉ</p>
              <span>{toFormated}</span>
            </div>
          </div>

          <Button onClick={handleClickReset}>
            <CalendarSvg />
          </Button>
        </section>
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
      from: Number(from),
      to: Number(to),
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
