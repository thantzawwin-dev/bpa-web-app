import React, { useMemo, createContext, useContext, useState } from "react";
import { THEME, SubProps as ThemeProp } from "./themeConstant";

export const ThemeContext = createContext({
  theme: THEME.light,
  setTheme: (nextTheme: ThemeProp) => {},
});

type Props = {
  defaultValue: ThemeProp
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue);
  const handleChange = (nextTheme: ThemeProp) => setTheme(nextTheme);
  // const themeProviderValue = useMemo(() => ({ theme, setTheme: han }), [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// export const useTheme = () => useContext(ThemeContext);
export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};