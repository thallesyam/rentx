import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { gql } from '@apollo/client'

import { client } from 'src/services/apollo'
import { CARS_QUERY } from './home'

import { Layout } from '@components/layout'

import ArrowLeft from '../../public/icons/arrow-left.svg'

import * as S from '@styles/pages/Car'

const CAR_QUERY = gql`
  query Car($slug: String!) {
    car(where: { slug: $slug }) {
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
      images {
        url
      }
    }
  }
`

type Car = {
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
  images: {
    url: string
  }[]
}

type Props = {
  car: Car
}

export default function Car({ car }: Props) {
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
  return <Layout title={(page.props?.car.name as string) ?? ''}>{page}</Layout>
}
