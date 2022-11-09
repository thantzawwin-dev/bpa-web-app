import { lazy } from 'react'

const ThankYou = lazy(() => import('pages/privatePages/ThankYou/ThankYou'))
const Confirm = lazy(() => import('pages/privatePages/Confirm/Confirm'))

type Prop = {
  path: string
  name?: string
  element: React.LazyExoticComponent<(props: any) => JSX.Element>
}

const privateRoutes: Array<Prop> = [
  { path: '/thank-you', name: 'Thank You', element: ThankYou },
  { path: '/confirm', name: 'Confirm', element: Confirm },
]

export default privateRoutes
