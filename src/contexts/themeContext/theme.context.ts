import React, { createContext, useContext } from 'react'

export interface ThemeProps {
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
      icon?: string;
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

export const ThemeContext = createContext<Props>({} as Props)

export const useTheme = () => {
  const { theme, setTheme, getThemes, getFonts } = useContext(ThemeContext)
  return { theme, setTheme, getThemes, getFonts }
}
