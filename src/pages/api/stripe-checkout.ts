import { gql } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { client } from 'src/services/apollo'
import { stripe } from 'src/services/stripe'
import { formatAmountForStripe } from 'src/utils/formatAmountForStripe'
import Stripe from 'stripe'

const CAR_BY_ID = gql`
  query Car($id: ID!) {
    car(where: { id: $id }) {
      id
      name
    }
  }
`
const USER_BY_ID = gql`
  query User($id: ID!) {
    client(where: { id: $id }) {
      customerId
      email
    }
  }
`

const UPDATE_USER = gql`
  mutation User($id: ID!, $customerId: String!) {
    updateClient(data: { customerId: $customerId }, where: { id: $id }) {
      customerId
    }
  }
`

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { total, carId, userId } = request.body

    const { data } = await client.query({
      query: CAR_BY_ID,
      variables: {
        id: carId,
      },
    })

    const { data: user } = await client.query({
      query: USER_BY_ID,
      variables: {
        id: userId,
      },
    })

    let customerId = user.client.customerId ?? ''

    if (user.client.customerId === null) {
      const stripeCustomer = await stripe.customers.create({
        email: user.client.email,
      })

      const { data: customer } = await client.mutate({
        mutation: UPDATE_USER,
        variables: {
          id: userId,
          customerId: stripeCustomer.id,
        },
      })

      customerId = customer.updateClient.customerId
    }

    if (!data.car) {
      response.status(400).end('Car is not exists')
    }

    // Criar customer id

    const params: Stripe.Checkout.SessionCreateParams = {
      customer: customerId,
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          name: data.car.name,
          amount: formatAmountForStripe(total, 'brl'),
          currency: 'brl',
          quantity: 1,
        },
      ],
      success_url: `${request.headers.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.origin}/payment/error?session_id={CHECKOUT_SESSION_ID}`,
    }
    const checkoutId: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params)

    response.json({ sessionId: checkoutId.id })
  } else {
    response.setHeader('Allow', 'POST')
    response.status(405).end('Method not allowed')
  }
}
