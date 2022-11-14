import React, { createContext, useContext } from 'react'
// import { THEME_DATA } from './theme.schema'
import THEMES from './theme.scheme.json'

export type ThemeProps = typeof THEMES.data.light;

type Props = {
  theme: ThemeProps
  setTheme: React.Dispatch<React.SetStateAction<ThemeProps>>
  getThemes: React.Dispatch<Array<ThemeProps>>
  getFonts: React.Dispatch<Array<string>>
}

export const ThemeContext = createContext<Props>({
  theme: THEMES.data.light,
  setTheme: () => {},
  getThemes: () => Array<ThemeProps>,
  getFonts: () => Array<string>,
})

export const useTheme = () => {
  const { theme, setTheme, getThemes, getFonts } = useContext(ThemeContext)
  return { theme, setTheme, getThemes, getFonts }
}
