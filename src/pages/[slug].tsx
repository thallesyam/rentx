import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { gql } from '@apollo/client'

import { client } from 'src/services/apollo'
import { Car as CarType, CARS_QUERY } from './home'

import { Layout } from '@components/layout'

const CAR_QUERY = gql`
  query Car($slug: String!) {
    car(where: { slug: $slug }) {
      name
    }
  }
`

type Props = {
  car: CarType
}

export default function Car({ car }: Props) {
  return <h1>{car?.name}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: CARS_QUERY,
  })

  const { cars } = data

  const paths = cars.map((car: CarType) => ({
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
