import React, { Suspense, lazy } from "react"
// import logo from './logo.svg'
import { ThemeProvider } from "contexts"
import THEMES from 'contexts/themeContext/theme.scheme.json'

// Containers
const DefaultLayout = lazy(() => import("pages/layout/DefaultLayout"));

type Props = {}

const App: React.FC<Props> = (props) => {
  
  return (
    <ThemeProvider defaultValue={THEMES.data.dark}>
      <Suspense fallback={<div>loading</div>}>
        <DefaultLayout />
      </Suspense>
    </ThemeProvider>
  )
};

export default App;
