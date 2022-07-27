import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { ReactElement, useState } from 'react'

import { client } from 'src/services/apollo'
import { getUserIdSSR } from 'src/utils/getUserIdSSR'
import { isNotLoggedRedirect } from 'src/utils/login-redirects'

import { Layout } from 'src/componentss/Layout'
import { UserImageCard } from 'src/componentss/UserImageCard'
import { Tabs } from 'src/componentss/Tabs'
import { ProfileInfo } from 'src/componentss/ProfileInfo'
import { PasswordChange } from 'src/componentss/PasswordChange'
import { ProfileSchedules } from 'src/componentss/ProfileSchedules'

import * as S from '@styles/pages/Profile'

const tabs = [
  { id: 1, name: 'Dados', tabName: 'info' },
  { id: 2, name: 'Trocar senha', tabName: 'change' },
]

const USER_QUERY = gql`
  query User($id: ID!) {
    client(where: { id: $id }) {
      email
      name
      cnh
      password
      image
    }
  }
`

const ORDERS_BY_USER = gql`
  query OrdersByUser($email: String!) {
    orders(where: { email: $email }) {
      orderItems {
        dateFrom
        dateTo
        car {
          id
          name
          company
          price
          supply
          images {
            url
          }
        }
      }
    }
  }
`

export type UserResponseQuery = {
  email: string
  name: string
  cnh: number
  image: string
  password: string
}

export type OrderItemResponseQuery = {
  dateTo: number
  dateFrom: number
  car: {
    id: string
    company: string
    price: number
    name: string
    supply: string
    images: {
      url: string
    }
  }
}

type Props = {
  user: UserResponseQuery
  orders: OrderItemResponseQuery[]
}
export default function Profile({ user, orders }: Props) {
  const [image, setImage] = useState<File>({} as File)
  const [previewImage, setPreviewImage] = useState('')
  const [selectedTab, setSelectedTab] = useState('info')

  function handleChangeImage(image: File) {
    setImage(image)
    setPreviewImage(URL.createObjectURL(image))
  }

  function handleChangeTab(selected: string) {
    setSelectedTab(selected)
  }

  return (
    <S.Container>
      <S.UserContainer>
        <UserImageCard
          url={previewImage !== '' ? previewImage : user?.image ?? ''}
          handleChangeImage={handleChangeImage}
        />

        <Tabs
          selectedTab={selectedTab}
          handleChangeTab={handleChangeTab}
          tabs={tabs}
        />

        {selectedTab === 'info' ? (
          <ProfileInfo user={user} image={image} />
        ) : (
          <PasswordChange
            password={user.password}
            userImage={user?.image ?? ''}
            image={image}
          />
        )}
      </S.UserContainer>

      <ProfileSchedules orders={orders} />
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isLogged = isNotLoggedRedirect('/profile/login', context)

  if (!!isLogged) {
    return isLogged
  }

  const userId = getUserIdSSR(context)
  const { data } = await client.query({
    query: USER_QUERY,
    variables: {
      id: userId,
    },
  })

  const { data: orders } = await client.query({
    query: ORDERS_BY_USER,
    variables: {
      email: data.client.email,
    },
  })

  return {
    props: {
      user: data.client ?? {},
      orders: orders.orders[0].orderItems,
    },
  }
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Profile" headerText="Profile">
      {page}
    </Layout>
  )
}
