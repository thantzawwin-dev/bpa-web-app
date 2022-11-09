import { useMemo, useState } from 'react'
import { ThemeContext } from './theme.context'
import { ThemeProps, THEME_DATA } from './theme.schema'
import _ from 'lodash'

type Props = {
  defaultValue: ThemeProps
  children?: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue)

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(THEME_DATA, 'font'))
    return allFonts
  }

  const getThemes = () => {
    return THEME_DATA
  }

  const 

  const themeProviderValue = useMemo(() => ({ theme, setTheme, getThemes, getFonts }), [theme])

  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>
}
