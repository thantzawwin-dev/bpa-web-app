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
  // { path: '/', element: Home },
  { path: '/bpa-web', element: Home },
  { path: '/bpa-web/:category', element: Category },
  { path: '/bpa-web/:category/:biller', element: BillPayment },
  { path: '/bpa-web/thank-you', element: ThankYou },
  { path: '/bpa-web/confirm', element: Confirm },
]

export default privateRoutes
