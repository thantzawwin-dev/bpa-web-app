import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, AuthProvider } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { getSearchParam } from 'services/url/url.service'
import { PublicRoute } from 'routes'
import { AuthProps } from 'MyModels'

type Props = {}

const App: React.FC<Props> = (props) => {
  const getThemeParam = () => {
    const themeParam = getSearchParam('theme') || ''
    const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
    const theme = getValueWithProp(themeName)(THEMES.data)
    return theme
  }

  const getAuthParam = () => {
    const authParam: AuthProps = {} as AuthProps
    authParam['token'] = getSearchParam('token')
    authParam['signToken'] = getSearchParam('signToken')
    authParam['claim'] = getSearchParam('claim')
    return authParam
  }

  return (
    <ThemeProvider defaultValue={getThemeParam()}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AuthProvider defaultValue={getAuthParam()}>
          <PublicRoute />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const getValueWithProp = (key: string) => (obj: Record<string, any>) => obj[key]

export default App
