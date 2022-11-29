import { TokenProps } from 'MyModels'
import React, { createContext, useContext } from 'react'

type Props = {
  token: TokenProps | null
  setToken: React.Dispatch<React.SetStateAction<TokenProps>>
  hasToken: boolean
}

export const TokenContext = createContext<Props>({} as Props)

export const useToken = () => {
  const { token, setToken, hasToken } = useContext(TokenContext)
  return { token, setToken, hasToken }
}
