import { AuthProps } from 'MyModels'
import React, { createContext, useContext } from 'react'

type Props = {
  auth: AuthProps | null
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>
  hasAuth: () => boolean
  onLogin: React.Dispatch<AuthProps>
  onLogout: () => void
}

export const AuthContext = createContext<Props>({} as Props)

export const useAuth = () => {
  const { auth, setAuth, hasAuth, onLogin, onLogout } = useContext(AuthContext)
  return { auth, setAuth, hasAuth, onLogin, onLogout }
}
