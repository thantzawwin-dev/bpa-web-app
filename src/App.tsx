import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { getSearchParam } from 'services/url/url.service'
import { PublicRoute } from 'routes'
import AuthProvider from 'contexts/authContext/AuthProvider'
import { AuthProps } from 'MyModels'

type Props = {}

const App: React.FC<Props> = (props) => {
  const getTheme = () => {
    const themeParam = getSearchParam('theme') || ''
    const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
    const theme = getValueWithProp(themeName)(THEMES.data)
    return theme
  }

  const getAuth = () => {
    const authParam: AuthProps = {} as AuthProps
    authParam['token'] = getSearchParam('token')
    authParam['signToken'] = getSearchParam('signToken')
    authParam['claim'] = getSearchParam('claim')
    return authParam
  }

  return (
    <AuthProvider defaultValue={getAuth()}>
      <ThemeProvider defaultValue={getTheme()}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <PublicRoute />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

const getValueWithProp = (key: string) => (obj: Record<string, any>) => obj[key]

export default App
