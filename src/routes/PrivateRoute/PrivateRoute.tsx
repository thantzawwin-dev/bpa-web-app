import { useAuth } from 'contexts'
import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import privateRoutes from './privateRoutes'

type Props = {}

const PrivateRoute: React.FC<Props> = () => {
  const { auth } = useAuth()
  const location = useLocation()
  
  if (auth && !auth?.isAuthenticated) {
    return <Navigate to='/launch-page' state={{ from:  location.pathname }} />
  }

  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.key}
            element={<route.element {...route.elementProps} />}
            {...route.props}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default PrivateRoute
