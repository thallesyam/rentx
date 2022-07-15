import { Button } from '@components/button'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ArrowRightCalendarSvg from '../../../public/icons/arrow-right-calendar.svg'
import CalendarSvg from '../../../public/icons/calendar.svg'

import * as S from './style'

type Props = {
  from: Date
  to: Date
  price: number
}

export function RentCheckout({ from, to, price }: Props) {
  const daily = to.getDate() - from.getDate()
  const fullPrice = price * daily

  const formatedFullPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(fullPrice)

  const fromFormated = format(from ?? new Date(), "dd MMMM yyyy'", {
    locale: ptBR,
  })

  const toFormated = format(to ?? new Date(), "dd MMMM yyyy'", {
    locale: ptBR,
  })

  function handleRentCar() {
    console.log(fullPrice)
  }

  return (
    <S.Container onSubmit={handleRentCar}>
      <section className="from_to_container">
        <div>
          <div>
            <p>DE</p>
            <span>{fromFormated}</span>
          </div>

          <ArrowRightCalendarSvg />

          <div>
            <p>ATÉ</p>
            <span>{toFormated}</span>
          </div>
        </div>

        <CalendarSvg />
      </section>

      <section className="price_container">
        <div>
          <div>
            <p>Total</p>
            <span>
              R$ {price} x {daily} diárias
            </span>
          </div>
        </div>

        <h3>{formatedFullPrice}</h3>
      </section>

      <Button type="submit">Alugar agora</Button>
    </S.Container>
  )
}
