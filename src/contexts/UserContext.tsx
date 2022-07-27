import { parseCookies } from 'nookies'
import { SetStateAction } from 'react'
import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'

type UserContextProps = {
  isLogged: boolean
  userId: string
  setIsLogged: Dispatch<SetStateAction<string>>
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState('')

  useEffect(() => {
    setIsLogged(parseCookies(null, '@rentx:userId')['@rentx:userId'])
  }, [isLogged])

  return (
    <UserContext.Provider
      value={{
        isLogged: !!isLogged,
        userId: isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
