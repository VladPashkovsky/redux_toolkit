import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../models/IUser'

export const fetchUsersThunk = createAsyncThunk(
  'usersFetchThunk',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    } catch (e) {
      thunkAPI.rejectWithValue('Error...')
    }
  }
)