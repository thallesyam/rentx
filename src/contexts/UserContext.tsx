import { parseCookies } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

type UserContextProps = {
  isLogged: boolean
  userId: string
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState('')

  useEffect(() => {
    setIsLogged(parseCookies(null, '@rentx:userId')['@rentx:userId'])
  }, [])

  return (
    <UserContext.Provider
      value={{
        isLogged: !!isLogged,
        userId: isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
