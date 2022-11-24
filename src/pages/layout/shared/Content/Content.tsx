import React from 'react'
import { PrivateRoute } from 'routes'

type Props = {}

const Content: React.FC<Props> = (props) => {
  return (
    <div>
      <PrivateRoute />
    </div>
  )
}

export default Content
