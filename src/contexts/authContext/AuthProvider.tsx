import { useMemo, useState } from 'react'
import { AuthContext } from './auth.context'
import { AuthProps } from 'MyModels'
import { fakeAuth } from 'services/api/mockAuthApi'

type Props = {
  children?: React.ReactNode
  defaultValue: AuthProps
}

const AuthProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [auth, setAuth] = useState(defaultValue)

  const handleLogin = async (auth: AuthProps) => {
    //const auth = await fakeAuth()
    setAuth(auth)
  }

  const hasAuth = () => {
    return auth && auth.token && auth.signToken && auth.claim ? true : false
  }

  const handleLogout = () => setAuth({} as AuthProps)

  const authProviderValue = useMemo(
    () => ({
      auth,
      setAuth,
      hasAuth,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    [auth],
  )

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
