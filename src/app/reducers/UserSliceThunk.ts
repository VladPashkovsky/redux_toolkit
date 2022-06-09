import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchUsersThunk } from '../dispatch/UserActionCreatorThunk'

interface UserState {
  users: IUser[],
  isLoading: boolean,
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const UserSliceThunk = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsersThunk.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUsersThunk.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.users = action.payload
      state.error = ''
    },
    [fetchUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default UserSliceThunk.reducer