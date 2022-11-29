import logger from './logger/logger.service'
import * as localStore from './localStorage/localStorage.service'
import * as url from './url/url.service'

export { logger, localStore, url }



export const tokenKey = process.env.REACT_APP_TOKEN_KEY || ''
export const themeKey = process.env.REACT_APP_THEME_KEY || ''