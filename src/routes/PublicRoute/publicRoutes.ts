import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'MyModels'

const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))
const Page401 = lazy(() => import('pages/error/Page401/Page401'))
const Page404 = lazy(() => import('pages/error/Page404/Page404'))
const Page500 = lazy(() => import('pages/error/Page500/Page500'))

const urlPrefix = process.env.REACT_APP_URL_PREFIX

export const publicRoutes: Array<RouteProps> = [
  { key: 1, props: { path: `/${urlPrefix}/*` }, element: DefaultLayout, index: true },
  { key: 2, props: { path: '/401' }, element: Page401 },
  { key: 3, props: { path: '/404' }, element: Page404 },
  { key: 4, props: { path: '/500' }, element: Page500 },
  {
    key: 0,
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: `/${urlPrefix}`, replace: true },
  },
]

export default publicRoutes
