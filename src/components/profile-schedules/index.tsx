import { ScheduleCard } from '@components/schedule-card'

import * as S from './style'

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
