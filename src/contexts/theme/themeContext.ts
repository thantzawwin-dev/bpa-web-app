import { createContext, useContext } from "react";
import { THEME } from "./themeConstant";

export const ThemeContext = createContext({
  theme: THEME.dark,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
