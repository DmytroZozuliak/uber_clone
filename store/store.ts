import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { navReducer } from './reducers/navSlice'

const rootReducer = combineReducers({
  nav: navReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
