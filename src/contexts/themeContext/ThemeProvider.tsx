import { useMemo, useState, useEffect } from 'react'
import { ThemeContext, ThemeProps } from './theme.context'
// import { ThemeProps, THEME_DATA } from './theme.schema'
import THEMES from './theme.scheme.json'
import _ from 'lodash'
import './globalStyle.css'

type Props = {
  defaultValue: ThemeProps
  children?: React.ReactNode
}

type keyValueProps = {
  key: string
  value: string
}

const styleVariablePrefix = '--theme'

const getStyleVariable = (theme: ThemeProps): keyValueProps[] => {
  let styleVariables: keyValueProps[] = []
  createStyleVariables(theme.style, styleVariablePrefix, (obj: keyValueProps) => styleVariables.push(obj))
  return styleVariables
}

// Nested object looping
const createStyleVariables = (obj: any, prefix: string, addVariable: CallableFunction) => {
  for (const key in obj) {
    if (_.isObject(obj[key])) {
      createStyleVariables(obj[key], [prefix, key].join('-'), addVariable)
    } else {
      addVariable({ key: [prefix, key].join('-'), value: obj[key] });
    }
  }
};

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue)

  useEffect(() => {
    getStyleVariable(theme).map((styleVariable) => 
      setStyleVariableValue(styleVariable)
    )
  }, [theme])

  const setStyleVariableValue = ({key, value}: keyValueProps): void => {
    //console.log(`Updating ${key} to: ${value}`)
    document.documentElement.style.setProperty(key, value)
  }

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
