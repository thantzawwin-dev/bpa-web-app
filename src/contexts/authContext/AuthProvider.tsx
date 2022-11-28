import { useEffect, useMemo, useState } from 'react'
import { AuthContext } from './auth.context'
import { AuthProps } from 'MyModels'
import { getChannelInfo, getChannelInfoMock, ChannelInfoRequestProps } from 'services/api/channelApi'
import { useNavigate } from 'react-router-dom'
// import { fakeAuth } from 'services/api/mockAuthApi'

type Props = {
  children?: React.ReactNode
  defaultValue: AuthProps
}

const AuthProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [auth, setAuth] = useState(defaultValue)
  const navigate = useNavigate();

  const handleLogin = useMemo(
    () => async () => {
      const channelPromise = await getChannelInfoMock({
        signToken: '123',
      } as ChannelInfoRequestProps)
      if (channelPromise) {
        auth.channel = channelPromise?.data
        setAuth(auth)
        navigate('/bpa-web', { replace: true })
      } else {
        navigate('/401', { replace: true })
      }
    },
    [auth.signToken],
  )

  const handleLogout = () => setAuth({} as AuthProps)

  useEffect(() => {
    if (auth.signToken) handleLogin()
  }, [auth, handleLogin])

  const isAuth = useMemo(
    () => (auth && auth.token && auth.signToken && auth.claim && auth.channel ? true : false),
    [auth],
  )

  const authProviderValue = useMemo(
    () => ({ auth, setAuth, isAuth, onLogin: handleLogin, onLogout: handleLogout }),
    [auth, handleLogin, isAuth],
  )

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
