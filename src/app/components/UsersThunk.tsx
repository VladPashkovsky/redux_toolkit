import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsersThunk } from '../dispatch/UserActionCreatorThunk'

const UsersThunk = () => {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(
    (state) => state.UserThunkReducer
  )

  useEffect(() => {
    dispatch(fetchUsersThunk())
  }, [])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default UsersThunk
