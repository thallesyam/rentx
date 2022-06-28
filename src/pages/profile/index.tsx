import { ReactElement } from 'react'

import { useUserQuery } from 'src/generated/graphql'

import { Layout } from '@components/layout'

import * as S from '@styles/pages/Profile'

export default function Profile() {
  const { data } = useUserQuery({
    variables: {
      id: 'cl4y8vj3c6bn80bkf1rmwcghw',
    },
  })

  console.log(data)

  return <S.Container>Profile</S.Container>
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Profile" headerText="Profile">
      {page}
    </Layout>
  )
}
