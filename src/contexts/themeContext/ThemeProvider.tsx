import { useMemo, useState, useEffect } from 'react'
import { ThemeContext, ThemeProps } from './theme.context'
// import { ThemeProps, THEME_DATA } from './theme.schema'
import THEMES from './theme.scheme.json'
import _ from 'lodash'
import './globalStyle.css'
import { generateBlackToTargetColor } from 'utils/helpers/generateTargetColor'

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
  createStyleVariables(theme.style, styleVariablePrefix, (obj: keyValueProps) =>
    styleVariables.push(obj),
  )
  return styleVariables
}

const createStyleVariables = (obj: any, prefix: string, addVariable: CallableFunction) => {
  for (const key in obj) {
    if (_.isObject(obj[key])) {
      createStyleVariables(obj[key], [prefix, key].join('-'), addVariable)
    } else {
      
      switch(key) {
        case 'icon': 
        console.log('key', generateBlackToTargetColor(obj[key]))
        addVariable({ key: [prefix, key].join('-'), value: generateBlackToTargetColor(obj[key]) })
        break;
        default: addVariable({ key: [prefix, key].join('-'), value: obj[key] })
        break;
      }
    }
  }
}

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue)

  useEffect(() => {
    getStyleVariable(theme).map((styleVariable) => setStyleVariableValue(styleVariable))
  }, [theme])

  const setStyleVariableValue = ({ key, value }: keyValueProps): void => {
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
