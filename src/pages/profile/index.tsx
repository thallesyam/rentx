import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { ReactElement, useState } from 'react'

import { client } from 'src/services/apollo'
import { getUserIdSSR } from 'src/utils/getUserIdSSR'

import { Layout } from '@components/layout'
import { UserImageCard } from '@components/user-image-card'
import { Tabs } from '@components/tabs'

import * as S from '@styles/pages/Profile'

const USER_QUERY = gql`
  query User($id: ID!) {
    client(where: { id: $id }) {
      email
      name
      cnh
      image {
        url
      }
    }
  }
`

export type UserResponseQuery = {
  email: string
  name: string
  cnh: number
  image: {
    url: string
  }
}

type Props = {
  user: UserResponseQuery
}
export default function Profile({ user }: Props) {
  const [image, setImage] = useState<File>({} as File)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<'info' | 'change'>('info')

  function handleChangeImage(image: File) {
    setImage(image)
    setPreviewImage(URL.createObjectURL(image))
  }

  function handleChangeTab(selected: 'info' | 'change') {
    setSelectedTab(selected)
  }

  return (
    <S.Container>
      <S.UserContainer>
        <UserImageCard
          url={previewImage !== '' ? previewImage : user?.image?.url ?? ''}
          handleChangeImage={handleChangeImage}
        />

        <Tabs selectedTab={selectedTab} handleChangeTab={handleChangeTab} />

        {selectedTab === 'info' ? <p>info</p> : <p>senha</p>}
      </S.UserContainer>

      <S.ScheduleContainer>ScheduleContainer</S.ScheduleContainer>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = getUserIdSSR(context)
  const { data } = await client.query({
    query: USER_QUERY,
    variables: {
      id: userId,
    },
  })

  return {
    props: {
      user: data.client ?? {},
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
