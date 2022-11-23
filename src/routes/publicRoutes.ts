import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'routes'

const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))
const Page404 = lazy(() => import('pages/publicPages/Page404/Page404'))
const Page500 = lazy(() => import('pages/publicPages/Page500/Page500'))

export const publicRoutes: Array<RouteProps> = [
  { key: 1, props: { path: '/bpa-web/*' }, element: DefaultLayout },
  { key: 2, props: { path: '/404' }, element: Page404 },
  { key: 3, props: { path: '/500' }, element: Page500 },
  {
    key: 0,
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: '/bpa-web', replace: true },
  },
]

export default publicRoutes
