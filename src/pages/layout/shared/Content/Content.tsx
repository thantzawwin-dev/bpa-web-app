import { Navigate, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { privateRoutes } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path="/" element={<Navigate to="/bpa-web" replace={true} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Content