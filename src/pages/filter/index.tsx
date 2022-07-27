import { ReactElement } from 'react'

import { Layout } from '@components/Layout'

import * as S from '@styles/pages/Filter'
import { CalendarFilter } from '@components/CalendarFilter'

export default function Filter() {
  return (
    <S.Container>
      <h1>
        Escolha uma data <br /> de início e fim do aluguel
      </h1>

      <CalendarFilter />
    </S.Container>
  )
}

Filter.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Buscar" headerText="Filtrar carros">
      {page}
    </Layout>
  )
}
