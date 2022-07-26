import Stripe from 'stripe'

export const stripe = new Stripe(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
  {
    apiVersion: null,
    appInfo: {
      name: 'rentx',
      version: '0.1.0',
    },
  }
)
