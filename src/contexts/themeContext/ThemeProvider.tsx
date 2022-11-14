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

export const ThemeProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [theme, setTheme] = useState(defaultValue)

  useEffect(() => {
    console.log("HI")
    getStyleVariableWithValue(theme)
  })

  const getStyleVariableWithValue = (theme: ThemeProps) => {
    //name = ('--').concat(name.trim());
    //console.log(`Converting ${name} to: ${value}`)

    var myData = nestedObject(theme.style, '--theme')

    console.log('myData > ', myData)
  }

  const nestedObject = (obj: any, prefix: string) => {
    console.log(`obj >> ${JSON.stringify(obj, null, 2)}`)
    for (const key in obj) {
      prefix = [prefix, key].join('-')
      console.log(`prefix ==> ${prefix}`)
      if (isObject(obj[key])) {
        console.log(`"Object" ==> ${prefix} => ${JSON.stringify(obj, null, 2)}`)
        nestedObject(obj[key], prefix)
      } else {
        console.log(`"Value" ==> ${prefix} => ${obj[key]}`)
        // return {
        //   name: prefix,
        //   value: obj[key],
        // }
      }
    }
  };

  const isObject = (val: any) => {
    if (val === null) {
      return false;
    }
    return typeof val === 'object';
  };

  const setStyleVariableValue = (name: string, value: string): void => {
    console.log(`Updating ${name} to: ${value}`)
    document.documentElement.style.setProperty(name, value)
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
