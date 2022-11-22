import { useMemo, useState, useEffect } from 'react'
import { AuthContext, AuthProps } from './auth.context'

type Props = {
  defaultValue: AuthProps
  children?: React.ReactNode
}

const fakeAuth: () => Promise<AuthProps> = () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          token: '2342f2f1d131rf12',
          claim: '1243njk245',
        }),
      500,
    ),
  )
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState({} as AuthProps)

  const handleLogin = async () => {
    const auth = await fakeAuth()
    setAuth(auth)
  }

  const handleLogout = () => setAuth({} as AuthProps)

  const value = {
    auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
