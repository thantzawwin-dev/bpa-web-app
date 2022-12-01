import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'MyModels'

const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))
const Page400 = lazy(() => import('pages/error/Page400/Page400'))
const Page401 = lazy(() => import('pages/error/Page401/Page401'))
const Page404 = lazy(() => import('pages/error/Page404/Page404'))
const Page500 = lazy(() => import('pages/error/Page500/Page500'))
const Error = lazy(() => import('pages/error/Error/Error'))
const LaunchPage = lazy(() => import('pages/public/LaunchPage/LaunchPage'))

const urlPrefix = process.env.REACT_APP_URL_PREFIX

export const publicRoutes: Array<RouteProps> = [
  { key: 1, props: { path: `/${urlPrefix}/*` }, element: DefaultLayout },
  { key: 2, props: { path: '/launch-page' }, element: LaunchPage, index: true },
  { key: 3, props: { path: '/400' }, element: Page400 },
  { key: 4, props: { path: '/401' }, element: Page401 },
  { key: 5, props: { path: '/404' }, element: Page404 },
  { key: 6, props: { path: '/500' }, element: Page500 },
  { key: 7, props: { path: '/Error' }, element: Error },
  {
    key: 0,
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: `/${urlPrefix}`, replace: true },
  },
]

export default publicRoutes
