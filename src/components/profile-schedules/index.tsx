import { ScheduleCard } from '@components/schedule-card'

import * as S from './style'

type Props = {
  title: string
}

export function ProfileSchedules() {
  return (
    <S.Container>
      <h1>Agendamentos feitos</h1>

      <section>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </section>
    </S.Container>
  )
}
