import { useMemo, useState } from 'react'
import { AuthContext } from './auth.context'
import { AuthProps } from 'MyModels'
import { ChannelInfoRequestProps, getChannelInfoMock } from 'services/api/channelApi'
import { logger } from 'services'
import { useNavigate } from 'react-router-dom'
// import { fakeAuth } from 'services/api/mockAuthApi'

type Props = {
  children?: React.ReactNode
  //defaultValue: authProps
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    channel: null
  } as AuthProps)
  const navigate = useNavigate();

  const getAuth = useMemo(
    () =>
      async (signToken: string, redirectLink: string = '/bpa-web') => {
        auth.isAuthenticated = false
        if (signToken) {
          const channelPromise = await getChannelInfoMock({
            signToken: signToken,
          } as ChannelInfoRequestProps)
          if (channelPromise && channelPromise.responseCode === 200) {
            auth.channel = channelPromise.data
            auth.isAuthenticated = true
            logger.log('Get auth Success')
          } else {
            logger.log('Get auth Failed')
            redirectLink = '/401'
          }
        } else {
          logger.log('Required Sign Token')
          redirectLink = '/401'
        }
        setAuth(auth)
        console.log(redirectLink)
        // const origin = location.state?.from?.pathname || redirectLink
        console.log('redirectLink', redirectLink)
        navigate(redirectLink, { replace: true })
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth],
  )

  const authProviderValue = useMemo(() => ({ auth, setAuth, getAuth }), [getAuth, auth])

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
