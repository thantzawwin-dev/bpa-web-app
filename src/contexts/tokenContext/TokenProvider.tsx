import { useEffect, useMemo, useState } from 'react'
import { TokenContext } from './token.context'
import { TokenProps } from 'MyModels'
import { localStore, tokenKey } from 'services'

type Props = {
  children?: React.ReactNode
  defaultValue: TokenProps
}

const TokenProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [token, setToken] = useState(defaultValue)

  useEffect(() => {
    if (token && token.oAuthToken && token.signToken && token.claim) {
      //setToken(token)
      localStore.set<TokenProps>(tokenKey, token)
    } 
    // else {
    //   const localToken = localStorage.get<TokenProps>(tokenKey)
    //   if (localToken && localToken.oAuthToken && localToken.signToken && localToken.claim)
    //     setToken(token)
    // }
  }, [token])

  const hasToken = useMemo(
    () => (token && token.oAuthToken && token.signToken && token.claim ? true : false),
    [token],
  )

  const tokenProviderValue = useMemo(
    () => ({ token, setToken, hasToken }),
    [token, setToken, hasToken],
  )

  return <TokenContext.Provider value={tokenProviderValue}>{children}</TokenContext.Provider>
}

export default TokenProvider
