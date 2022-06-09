import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserSlice'
import UserThunkReducer from './reducers/UserSliceThunk'

const rootReducer = combineReducers({
  UserReducer,
  UserThunkReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']