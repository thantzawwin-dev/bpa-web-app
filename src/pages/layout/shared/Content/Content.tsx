import { Navigate, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { privateRoutes } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path="/*" element={<Navigate to="/404" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Content