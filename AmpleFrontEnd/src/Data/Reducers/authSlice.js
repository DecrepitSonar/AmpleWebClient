import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  LoggedIn: false,
  user: {},
  error: ""
}

const handleLogin = createAsyncThunk('auth/handleLogin',  credentials  => {
     return axios.post('http://localhost:8000/api/v1/auth/login', credentials)
      .then( response => { 
        console.log( response )
        return response
      })
})

const handleRegister = createAsyncThunk('auth/handleRegister', authData => {
  return axios.post("http://localhost:8000/api/v1/auth/signup", authData)
  .then( response => {
    return response 
  })
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleLogin.fulfilled, ( state, action) => {
      state.isLoading = false
      state.LoggedIn = true
      state.user = action.payload.data
    })
    builder.addCase( handleLogin.rejected, (state, action) => {
      state.isLoading = false
      state.user = {}
      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "Username or Password incorrect"
            break;
            default: 
            state.error = "Network error"
      }
    })
    builder.addCase(handleRegister.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleRegister.fulfilled, (state, action ) => {
      state.isLoading = false 
    })
    builder.addCase( handleRegister.rejected, (state, action) => {
      state.isLoading = false

      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "User Already Exist"
            break;
            default: 
            state.error = "Network error"
      }
    })
  }
})

export const auth = authSlice.reducer
export const login = handleLogin 
export const register = handleRegister