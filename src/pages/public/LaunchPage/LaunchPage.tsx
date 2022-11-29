import React, { useEffect, useMemo } from 'react'
import { useAuth, useToken } from 'contexts'
// import { Button } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {}

const LaunchPage: React.FC<Props> = (props) => {
  const { token } = useToken()
  const { getAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAuth = useMemo(
    () => () => {
      if (token && token.signToken) {
        getAuth(token.signToken, location?.state?.from)
      } else {
        navigate('/401', { replace: true })
      }
    },
    [getAuth, location, navigate, token],
  )

  useEffect(() => {
    handleAuth()
  }, [handleAuth, token])

  return <div>LaunchPage</div>
}

export default LaunchPage
