
import React from 'react'
import { useTheme } from 'contexts'
// import { THEME_NAME } from 'contexts/themeContext/theme.schema';
// import { Button } from 'components'
import { Header, Content, Sidebar, Footer } from './shared'

type Props = {
  children?: React.ReactNode;
};

export function fetchCount(amount = 1, time = 2000) {
  amount++;
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), time))
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="wrer d-flex flex-column min-vh-100 bg-light">
        <Header />
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