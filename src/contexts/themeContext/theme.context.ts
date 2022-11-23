import { ThemeProps } from 'MyModels'
import React, { createContext, useContext } from 'react'

type Props = {
  theme: ThemeProps
  setTheme: React.Dispatch<React.SetStateAction<ThemeProps>>
  getThemes: React.Dispatch<Array<ThemeProps>>
  getFonts: React.Dispatch<Array<string>>
}

export const ThemeContext = createContext<Props>({} as Props)

export const useTheme = () => {
  const { theme, setTheme, getThemes, getFonts } = useContext(ThemeContext)
  return { theme, setTheme, getThemes, getFonts }
}
