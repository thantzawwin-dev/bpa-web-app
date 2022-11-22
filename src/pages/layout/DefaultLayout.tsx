
import React from 'react'
import { useTheme } from 'contexts'
import THEMES from 'contexts/themeContext/theme.scheme.json'
// import { Button } from 'components'
import { Header, Content, Footer } from './shared'

type Props = {
  children?: React.ReactNode;
};

export function fetchCount(amount = 1, time = 2000) {
  amount++;
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), time))
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="wrer d-flex flex-column min-vh-100 bg-light">
        <Header />
        <h2>{theme.name}</h2>
        <button onClick={() => setTheme(THEMES.data.light)}>light</button> |
        <button onClick={() => setTheme(THEMES.data.dark)}>dark</button> |
        <button onClick={() => setTheme(THEMES.data.material)}>material</button> |
        <button onClick={() => setTheme(THEMES.data.sharp)}>sharp</button> |
        <button onClick={() => setTheme(THEMES.data.calm)}>calm</button> |
        <button onClick={() => setTheme(THEMES.data.cherryBonBon)}>cherry Bon Bon</button> |
        <button onClick={() => setTheme(THEMES.data.seaWave)}>sea Wave</button>
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}


// const DefaultLayout: React.FC<Props> = ({ children }) => {
//   const { theme, setTheme } = useTheme();

//   const style: React.CSSProperties = {
//     backgroundColor: theme ? theme.background : '',
//     color: theme ? theme.foreground : '',
//   }

//   const toggleTheme = () => {
//     theme === THEME_NAME.light ? setTheme(THEME_NAME.dark) : setTheme(THEME_NAME.light)
//   };

//   return (
//     <>
//       <button onClick={()=> toggleTheme()}>Toggle Theme</button>
//       <div style={style}>DefaultLayout</div>
//     </>
//   );
// }

export default DefaultLayout