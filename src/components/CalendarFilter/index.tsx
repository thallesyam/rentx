import { FormEvent, useState } from 'react'
import { format, getUnixTime } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Button } from '@components/Button'
import { Calendar } from '@components/Calendar'

import * as S from './style'
import { useRouter } from 'next/router'

export function CalendarFilter() {
  const router = useRouter()
  const [date, setDate] = useState(new Date())

  const fromFormated = format(date[0] ?? new Date(), "dd 'de' MMMM'", {
    locale: ptBR,
  })

  const toFormated = format(date[1] ?? new Date(), "dd 'de' MMMM'", {
    locale: ptBR,
  })

  function handleSelectedDate(event: FormEvent) {
    event.preventDefault()
    const from = getUnixTime(date[0])
    const to = getUnixTime(date[1])

    router.push(`/filter/results?from=${from}&to=${to}`)
  }

  return (
    <S.Container>
      <section>
        <Calendar date={date} setDate={setDate} />

        <form onSubmit={handleSelectedDate}>
          <div className="input_container">
            <div>
              <label htmlFor="from">De</label>
              <input
                type="text"
                id="from"
                name="from"
                readOnly
                value={fromFormated}
              />
            </div>

            <div>
              <label htmlFor="to">Até</label>
              <input
                type="text"
                id="to"
                name="to"
                readOnly
                value={toFormated}
              />
            </div>
          </div>

          <Button
            disabled={date[0] === undefined || date[1] === undefined}
            type="submit"
          >
            Confirmar
          </Button>
        </form>
      </section>
    </S.Container>
  )
}
