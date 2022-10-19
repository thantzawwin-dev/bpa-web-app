
import React from 'react'
import { useTheme, THEME } from 'contexts';
import { Button } from 'components';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const style: React.CSSProperties = {
    backgroundColor: theme.background,
    color: theme.foreground,
  };

  const toggleTheme = () => {
    theme === THEME.light ? setTheme(THEME.dark) : setTheme(THEME.light)
  };

  console.log(theme)
  return (
    <>
      <button onClick={()=> toggleTheme()}>Toggle Theme</button>
      <div style={style}>DefaultLayout</div>
    </>
  );
}

export default DefaultLayout