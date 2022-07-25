import { Button } from '@components/button'
import { Spinner } from '@components/spinner'
import { format, getUnixTime } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useCheckOrdersPerDateAndCarIdQuery } from 'src/generated/graphql'

import ArrowRightCalendarSvg from '../../../public/icons/arrow-right-calendar.svg'
import CalendarSvg from '../../../public/icons/calendar.svg'

import * as S from './style'

type OrderResponse = {
  order: {
    id: string
  }
}

type Props = {
  from: Date
  to: Date
  price: number
  carId: string
}

export function RentCheckout({ from, to, price, carId }: Props) {
  const { data, loading } = useCheckOrdersPerDateAndCarIdQuery({
    variables: {
      carId,
      dateFrom: getUnixTime(from),
      dateTo: getUnixTime(to),
    },
  })

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

      <Button
        type="submit"
        disabled={data.orderItems.length > 0 || loading === true}
      >
        {loading ? <Spinner /> : 'Alugar agora'}
      </Button>
    </S.Container>
  )
}
