import { useMemo, useState } from 'react'
import { ThemeContext, ThemeProps } from './theme.context'
// import { ThemeProps, THEME_DATA } from './theme.schema'
import THEMES from './theme.scheme.json'
import _ from 'lodash'
import './globalStyle.css'

type Props = {
  defaultValue: ThemeProps
  children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue)

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(THEMES.data, 'font'))
    return allFonts
  }

  const getThemes = () => {
    return JSON.parse(THEMES.data.toString())
  }

  const themeProviderValue = useMemo(() => ({ theme, setTheme, getThemes, getFonts }), [theme])

  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>
}
