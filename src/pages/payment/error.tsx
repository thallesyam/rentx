import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import { Layout } from '@components/layout'
import { Button } from '@components/button'

import RentxIconSvg from '../../../public/icons/rentx-icon-large.svg'
import ErrorSvg from '../../../public/icons/error.svg'

import * as S from '../../styles/pages/Error'

export default function Error() {
  const router = useRouter()

  return (
    <S.Container>
      <RentxIconSvg />

      <div>
        <ErrorSvg />
        <h1>Ops, algo deu errado!</h1>
        <p>
          Talvez algum erro na forma de pagamento, mas não desanime tente
          novamente em alguns minutos!
        </p>

        <Button onClick={() => router.push('/home')}>Ok</Button>
      </div>
    </S.Container>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isSidebar={false} title={'Erro'}>
      {page}
    </Layout>
  )
}
