import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { publicRoutes } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </Suspense>
    </>
  )
}

export default Content