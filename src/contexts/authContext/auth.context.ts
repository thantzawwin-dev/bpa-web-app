import { AuthProps } from 'MyModels'
import React, { createContext, useContext } from 'react'

type Props = {
  auth: AuthProps | null
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>
  isAuth: boolean
  onLogin: () => Promise<void>
  onLogout: () => void
}

export const AuthContext = createContext<Props>({} as Props)

export const useAuth = () => {
  const { auth, setAuth, isAuth, onLogin, onLogout } = useContext(AuthContext)
  return { auth, setAuth, isAuth, onLogin, onLogout }
}
