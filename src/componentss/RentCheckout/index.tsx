import { Button } from 'src/componentss/Button'
import { Spinner } from 'src/componentss/Spinner'
import { format, getUnixTime, intervalToDuration } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent } from 'react'

import { useCheckOrdersPerDateAndCarIdQuery } from 'src/generated/graphql'
import { useUserContext } from 'src/hooks/useUserContext'
import { api } from 'src/services/api'
import { getStripeJs } from 'src/services/stripe-js'

import ArrowRightCalendarSvg from '../../../public/icons/arrow-right-calendar.svg'
import CalendarSvg from '../../../public/icons/calendar.svg'

import * as S from './style'

type Props = {
  from: Date
  to: Date
  price: number
  carId: string
}

export function RentCheckout({ from, to, price, carId }: Props) {
  const { userId } = useUserContext()
  const { data, loading } = useCheckOrdersPerDateAndCarIdQuery({
    variables: {
      carId,
      dateFrom: getUnixTime(from),
      dateTo: getUnixTime(to),
    },
  })

  const daily = intervalToDuration({
    start: new Date(to),
    end: new Date(from),
  }).days

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

  async function handleRentCar(event: FormEvent) {
    event.preventDefault()

    const stripeData = {
      total: fullPrice,
      carId,
      userId,
      from,
      to,
    }

    try {
      const responseStripe = await api.post('/stripe-checkout', stripeData)
      const { sessionId } = responseStripe.data

      console.log(sessionId)

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
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
        disabled={data?.orderItems.length > 0 || loading === true}
      >
        {loading ? <Spinner /> : 'Alugar agora'}
      </Button>
    </S.Container>
  )
}
