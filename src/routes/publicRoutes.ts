import { lazy } from 'react'

// const Login = lazy(() => import('pages/publicPages/Login/Login'))
// const Register = lazy(() => import('../pages/publicPages/Register/Register'))
const Page404 = lazy(() => import('pages/publicPages/Page404/Page404'))
const Page500 = lazy(() => import('pages/publicPages/Page500/Page500'))
const Home = lazy(() => import ('pages/publicPages/Home/Home'))
const BillPayment = lazy(() => import('pages/publicPages/BillPayment/BillPayment'))
// const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))

type Prop = {
  path: string
  name?: string
  element: any //React.LazyExoticComponent<(props: any) => JSX.Element>
}

export const publicRoutes: Array<Prop> = [
  // { path: '/login', name: 'User Login', element: Login },
  // { path: '/register', name: 'User Registration', element: Register },
  { path: '/404', name: 'Page 404', element: Page404 },
  { path: '/500', name: 'Page 500', element: Page500 },
  { path: '/', name: 'Home', element: Home },
  { path: '/*', name: 'Bill Payment', element: BillPayment },
]

export default publicRoutes
