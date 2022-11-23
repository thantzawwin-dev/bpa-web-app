import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'routes'

const Home = lazy(() => import('pages/privatePages/Home/Home'))
const ThankYou = lazy(() => import('pages/privatePages/ThankYou/ThankYou'))
const Confirm = lazy(() => import('pages/privatePages/Confirm/Confirm'))
const BillPayment = lazy(() => import('pages/privatePages/BillPayment/BillPayment'))
const Category = lazy(() => import('pages/privatePages/Category/Category'))

const privateRoutes: Array<RouteProps> = [
  { key: 1, props: { path: '/' }, element: Home },
  { key: 2, props: { path: '/thank-you' }, element: ThankYou },
  { key: 3, props: { path: '/:category' }, element: Category },
  { key: 4, props: { path: '/:category/:biller' }, element: BillPayment },
  { key: 5, props: { path: '/:category/:biller/confirm' }, element: Confirm },
  {
    key: 0,
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: '/404', replace: true },
  }
]

export default privateRoutes
