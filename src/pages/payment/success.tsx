import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@components/button'
import { Layout } from '@components/layout'

import RentxIconSvg from '../../../public/icons/rentx-icon-large.svg'
import CheckSvg from '../../../public/icons/check.svg'

import * as S from '../../styles/pages/Success'

export default function Success() {
  const router = useRouter()

  return (
    <S.Container>
      <RentxIconSvg />

      <div>
        <CheckSvg />
        <h1>Carro alugado!</h1>
        <p>
          Agora você só precisa ir até a concessionária da RentX pegar o seu
          automóvel.
        </p>

        <Button onClick={() => router.push('/home')}>Ok</Button>
      </div>
    </S.Container>
  )
}

Success.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isSidebar={false} title={'Sucesso'}>
      {page}
    </Layout>
  )
}
