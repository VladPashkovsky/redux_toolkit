import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserSlice'
import UserThunkReducer from './reducers/UserSliceThunk'
import { postAPI } from './services/PostService'

const rootReducer = combineReducers({
  UserReducer,
  UserThunkReducer,
  [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
