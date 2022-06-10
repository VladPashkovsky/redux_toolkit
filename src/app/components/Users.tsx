import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../dispatch/UserActionCreator'

const Users = () => {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(
    (state) => state.UserReducer
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default Users
