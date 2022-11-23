import { AuthProps } from 'MyModels'
import { createContext, useContext } from 'react'

// const AuthContext = createContext({
//   authenticated: false,
//   setAuthenticated: () => {},
// })

type Props = {
  auth: AuthProps | null
  onLogin: React.Dispatch<React.SetStateAction<AuthProps>>
  onLogout: () => void
}

export const AuthContext = createContext<Props>({} as Props)

export const useAuth = () => {
  const { auth, onLogin, onLogout } = useContext(AuthContext)
  return { auth, onLogin, onLogout }
}
