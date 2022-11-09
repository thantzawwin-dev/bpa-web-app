import React, { createContext, useContext } from 'react'
import { THEME_DATA, ThemeProps } from './theme.schema'
import data from './theme.scheme.json'

type PersonalInfo = typeof data;

type Props = {
  theme: ThemeProps
  setTheme: React.Dispatch<React.SetStateAction<ThemeProps>>
  getThemes: React.Dispatch<Array<ThemeProps>>
  getFonts: React.Dispatch<Array<string>>
}

export const ThemeContext = createContext<Props>({
  theme: THEME_DATA.light,
  setTheme: () => {},
  getThemes: () => Array<ThemeProps>,
  getFonts: () => Array<string>,
})

export const useTheme = () => {
  const { theme, setTheme, getThemes, getFonts } = useContext(ThemeContext)
  return { theme, setTheme, getThemes, getFonts }
}
