import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sj5gxj24dx01wgfockde4e/master/upload',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
})
