import React, { createContext, useContext } from 'react'
import { UserProps } from 'MyModels'

type Props = {
  user: UserProps | null
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

export const UserContext = createContext<Props>({} as Props)

export const useUser = () => {
  const { user, setUser } = useContext(UserContext)
  return { user, setUser }
}
