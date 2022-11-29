import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, AuthProvider, TokenProvider } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { url, localStore, themeKey, tokenKey } from 'services'
import { PublicRoute } from 'routes'
import { ThemeProps, TokenProps } from 'MyModels'

type Props = {}

const App: React.FC<Props> = (props) => {
  const { getSearchParam } = url

  const getThemeParam = () => {
    const themeParam = getSearchParam('theme') || ''
    if (themeParam) {
      const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
      const theme = getValueWithProp(themeName)(THEMES.data)
      return theme
    } else {
      const theme = getLocalStorageTheme() || 'light'
      return theme
    }
  }

  const getLocalStorageTheme: () => ThemeProps | null = () => {
    const theme = localStore.get<ThemeProps>(themeKey)
    return theme || null
  }

  const getTokenParam = () => {
    let tokenParam: TokenProps = {} as TokenProps
    tokenParam['oAuthToken'] = getSearchParam('token')
    tokenParam['signToken'] = getSearchParam('signToken')
    tokenParam['claim'] = getSearchParam('claim')
    tokenParam =
      tokenParam && tokenParam.oAuthToken && tokenParam.signToken && tokenParam.claim
        ? tokenParam
        : getLocalStorageToken()
    return tokenParam
  }

  const getLocalStorageToken: () => TokenProps = () => {
    let tokenParam: TokenProps = {} as TokenProps
    const localToken = localStore.get<TokenProps>(tokenKey)
    if (localToken && localToken.oAuthToken && localToken.signToken && localToken.claim)
      return localToken
    else return tokenParam
  }

  return (
    <ThemeProvider defaultValue={getThemeParam()}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <TokenProvider defaultValue={getTokenParam()}>
          <AuthProvider>
            <PublicRoute />
          </AuthProvider>
        </TokenProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const getValueWithProp = (key: string) => (obj: Record<string, any>) => obj[key]

export default App
