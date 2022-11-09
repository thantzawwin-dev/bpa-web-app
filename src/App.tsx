import React, { Suspense, lazy } from "react"
// import logo from './logo.svg'
import { ThemeProvider } from "contexts"
import { THEME_NAME } from "contexts/themeContext/theme.schema"

// Containers
const DefaultLayout = lazy(() => import("pages/layout/DefaultLayout"));

type Props = {}

const App: React.FC<Props> = (props) => {
  
  return (
    <ThemeProvider defaultValue={THEME_NAME.light}>
      <Suspense fallback={<div>loading</div>}>
        <DefaultLayout />
      </Suspense>
    </ThemeProvider>
  )
};

export default App;
