import { lazy } from 'react'

const Home = lazy(() => import('pages/privatePages/Home/Home'))
const ThankYou = lazy(() => import('pages/privatePages/ThankYou/ThankYou'))
const Confirm = lazy(() => import('pages/privatePages/Confirm/Confirm'))
const BillPayment = lazy(() => import('pages/privatePages/BillPayment/BillPayment'))
const Category = lazy(() => import('pages/privatePages/Category/Category'))

type Props = {
  path: string
  element: React.LazyExoticComponent<(props: any) => JSX.Element>
}

const privateRoutes: Array<Props> = [
  { path: '/', element: Home },
  { path: '/thank-you', element: ThankYou },
  { path: '/:category', element: Category },
  { path: '/:category/:biller', element: BillPayment },
  { path: '/:category/:biller/confirm', element: Confirm },
]

export default privateRoutes
