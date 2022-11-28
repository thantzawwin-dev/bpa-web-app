import { useAuth } from 'contexts/authContext/auth.context'
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import privateRoutes from './privateRoutes'

type Props = {}

const PrivateRoute: React.FC<Props> = () => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    console.log("FLASE")
    return <Navigate to="/401" replace />
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