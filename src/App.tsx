import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from 'routes'
// import logo from './logo.svg'

type Props = {}

const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))

const App: React.FC<Props> = (props) => {
  return (
    <ThemeProvider defaultValue={getTheme()}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            {publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path="/bpa-web/*" element={<DefaultLayout />} />
            <Route path="/*" element={<Navigate to="/bpa-web" replace={true} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key]

const getTheme = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const themeParam = urlParams.get('theme') || ''
  const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
  const theme = getKeyValue(themeName)(THEMES.data)
  return theme
}

export default App
