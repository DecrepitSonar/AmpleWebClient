import { configureStore, createSlice} from '@reduxjs/toolkit'
import ThunkMiddleware from "redux-thunk"
import RootReducers from "./Reducers/RootReducers"

const initialState = {}

export default configureStore({
  reducer: {
    RootReducer: RootReducers
  },
  initialState,
  ThunkMiddleware
})

