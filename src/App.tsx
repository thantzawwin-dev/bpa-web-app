import React, { Suspense, lazy } from "react"
import { ThemeProvider } from "contexts"
import THEMES from 'contexts/themeContext/theme.scheme.json'
import { BrowserRouter } from "react-router-dom";
// import logo from './logo.svg'

// Containers
const DefaultLayout = lazy(() => import("pages/layout/DefaultLayout"));


type Props = {}

const App: React.FC<Props> = (props) => {

  return (
    <ThemeProvider defaultValue={getTheme()}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>loading</div>}>
          <DefaultLayout />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
};

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key]

const getTheme = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const themeParam = urlParams.get('theme') || ''
  const themeName = THEMES.data.hasOwnProperty(themeParam) ? themeParam : 'light'
  const theme = getKeyValue(themeName)(THEMES.data)
  return theme
}

export default App;
