import { ReactElement } from 'react'
import { Layout } from '../components/Layout'

import * as S from '../styles/pages/Home'

export default function Home() {
  return <S.Container>Home</S.Container>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>
}
