import { useMemo, useState } from 'react'
import { UserContext } from './user.context'
import { UserProps } from 'MyModels'
// import { fakeAuth } from 'services/api/mockAuthApi'

type Props = {
  children?: React.ReactNode
  defaultValue: UserProps
}

const UserProvider: React.FC<Props> = ({ defaultValue, children }) => {
  const [user, setUser] = useState(defaultValue)

  const userProviderValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  )

  return <UserContext.Provider value={userProviderValue}>{children}</UserContext.Provider>
}

export default UserProvider
