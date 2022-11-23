import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { privateRoutes } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default Content
