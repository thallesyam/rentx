import { ReactElement } from 'react'
import { Layout } from '../components/layout'

import * as S from '../styles/pages/Login'

export default function Login() {
  return <S.Container>Login</S.Container>
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Login">{page}</Layout>
}
