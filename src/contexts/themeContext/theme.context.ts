import React, { createContext, useContext } from 'react'
// import { THEME_DATA } from './theme.schema'
import THEMES from './theme.scheme.json'

export type ThemeProps = {
  id: string;
  name: string;
  style: {
    colors?: {
      header?: {
        text: string;
        background: string;
      };
      body?: string;
      text?: string;
      button?: {
        text: string;
        background: string;
      };
      link?: {
        text: string;
        opacity: number;
      };
    };
    font?: string;
  };
}

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
