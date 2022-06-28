import { parseCookies } from 'nookies'
import { createContext, ReactNode } from 'react'

type UserContextProps = {
  isLogged: boolean
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: Props) {
  const isLogged = !!parseCookies(null, '@rentx:userId')['@rentx:userId']

  return (
    <UserContext.Provider value={{ isLogged }}>{children}</UserContext.Provider>
  )
}
