import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import publicRoutes from './publicRoutes'

type Props = {}

const PublicRoute: React.FC<Props> = () => {
  
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {publicRoutes.map((route) => (
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

export default PublicRoute
