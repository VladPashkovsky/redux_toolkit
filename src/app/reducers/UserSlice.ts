import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'

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

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.users = action.payload
      state.error = ''
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
  extraReducers: {},
})

export default UserSlice.reducer