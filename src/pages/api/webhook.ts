import { gql } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { client } from 'src/services/apollo'
import { stripe } from 'src/services/stripe'
import { getUnixTime, parseISO } from 'date-fns'

const CREATE_ORDER = gql`
  mutation CreateOrderMutation($data: OrderCreateInput!) {
    createOrder(data: $data) {
      id
      email
      total
    }
  }
`

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const event = request.body

  const session = await stripe.checkout.sessions.retrieve(
    event.data.object.id,
    {
      expand: ['line_items.data.price.product', 'customer'],
    }
  )
  const line_items = session.line_items.data
  const customer: any = session.customer

  const data = {
    email: customer.email,
    total: session.amount_total,
    stripeCheckoutId: session.id,
    orderItems: {
      create: line_items.map((item: any) => ({
        total: item.amount_total,
        dateFrom: getUnixTime(parseISO(item.price.product.metadata.from)),
        dateTo: getUnixTime(parseISO(item.price.product.metadata.to)),
        car: {
          connect: {
            id: item.price.product.metadata.carId,
          },
        },
      })),
    },
  }

  await client.mutate({
    mutation: CREATE_ORDER,
    variables: {
      data: data,
    },
  })

  response.status(200).end()
}
