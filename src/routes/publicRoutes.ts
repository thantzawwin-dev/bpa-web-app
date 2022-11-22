import { lazy } from 'react'

// const Login = lazy(() => import('pages/publicPages/Login/Login'))
// const Register = lazy(() => import('../pages/publicPages/Register/Register'))
const Page404 = lazy(() => import('pages/publicPages/Page404/Page404'))
const Page500 = lazy(() => import('pages/publicPages/Page500/Page500'))

type Props = {
  path: string
  element: any //React.LazyExoticComponent<(props: any) => JSX.Element>
}

export const publicRoutes: Array<Props> = [
  // { path: '/login', name: 'User Login', element: Login },
  // { path: '/register', name: 'User Registration', element: Register },
  { path: '/404', element: Page404 },
  { path: '/500', element: Page500 },
]

export default publicRoutes
