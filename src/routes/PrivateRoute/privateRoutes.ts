import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'MyModels'

const Home = lazy(() => import('pages/private/Home/Home'))
const ThankYou = lazy(() => import('pages/private/ThankYou/ThankYou'))
const Confirm = lazy(() => import('pages/private/Confirm/Confirm'))
const BillPayment = lazy(() => import('pages/private/BillPayment/BillPayment'))
const Category = lazy(() => import('pages/private/Category/Category'))

const Error = lazy(() => import('pages/error/Error/Error'))
// const Page400 = lazy(() => import('pages/error/Page400/Page400'))
const Page401 = lazy(() => import('pages/error/Page401/Page401'))
const Page404 = lazy(() => import('pages/error/Page404/Page404'))
const Page500 = lazy(() => import('pages/error/Page500/Page500'))

const privateRoutes: Array<RouteProps> = [
  { key: 1, props: { path: '/' }, element: Home, index: true },
  { key: 2, props: { path: '/thank-you' }, element: ThankYou },
  { key: 3, props: { path: '/:category' }, element: Category },
  { key: 4, props: { path: '/:category/:biller' }, element: BillPayment },
  { key: 5, props: { path: '/:category/:biller/confirm' }, element: Confirm },
  // { key: 6, props: { path: '/400' }, element: Page400 },
  { key: 7, props: { path: '/401' }, element: Page401 },
  { key: 8, props: { path: '/404' }, element: Page404 },
  { key: 9, props: { path: '/500' }, element: Page500 },
  { key: 10, props: { path: '/Error' }, element: Error },
  {
    key: 0,
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: '/404', replace: true },
  },
]

export default privateRoutes
