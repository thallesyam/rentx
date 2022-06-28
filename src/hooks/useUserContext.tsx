import { useContext } from 'react'
import { UserContext } from 'src/contexts/UserContext'

export const useUserContext = () => useContext(UserContext)
