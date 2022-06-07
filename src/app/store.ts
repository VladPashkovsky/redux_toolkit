import { combineReducers, configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({})


const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']