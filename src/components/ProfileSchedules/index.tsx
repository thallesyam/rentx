import { OrderItemResponseQuery } from 'src/pages/profile'

import { ScheduleCard } from '@components/ScheduleCard'

import * as S from './style'

type Props = {
  orders: OrderItemResponseQuery[]
}

export function ProfileSchedules({ orders }: Props) {
  return (
    <S.Container>
      <h1>Agendamentos feitos</h1>

      <section>
        {orders.map((order) => (
          <ScheduleCard
            key={order.car.id}
            car={order.car}
            dateFrom={order.dateFrom}
            dateTo={order.dateTo}
          />
        ))}
      </section>
    </S.Container>
  )
}
