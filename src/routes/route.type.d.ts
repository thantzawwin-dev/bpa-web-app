declare module 'MyModels' {
  export interface RouteProps {
    index?: boolean
    key: number
    props: {
      path: string
    }
    element: React.LazyExoticComponent<React.ComponentPropsWithRef<any>> | Function
    elementProps?: { to: string; replace: boolean }
  }
}
