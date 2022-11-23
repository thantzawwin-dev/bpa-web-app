import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { publicRoutes } from 'routes'
import { getSearchParam } from 'services/url/url.service'
// import logo from './logo.svg'

type Props = {}

const App: React.FC<Props> = (props) => {
  const getTheme = () => {
    const themeParam = getSearchParam('theme') || ''
    const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
    const theme = getKeyValue(themeName)(THEMES.data)
    return theme
  }

  return (
    <ThemeProvider defaultValue={getTheme()}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            {publicRoutes.map((route) => (
              <Route
                key={route.key}
                element={<route.element {...route.elementProps} />}
                {...route.props}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key]

export default App
