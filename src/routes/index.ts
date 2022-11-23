import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'

export { publicRoutes, privateRoutes }

export interface RouteProps {
  key: number
  props: {
    path: string
  }
  element: React.LazyExoticComponent<React.ComponentPropsWithRef<any>> | Function
  elementProps?: { to: string; replace: boolean }
}
