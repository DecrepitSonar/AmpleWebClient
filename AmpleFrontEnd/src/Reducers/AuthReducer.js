import { createSlice } from '@reduxjs/toolkit'

export const Auth = createSlice({
  name: 'auth',
  initialState: {
    LoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.LoggedIn = true
    },
    logut: (state, action) => {
      state.LoggedIn = false
    }
  }
})

export const isLoggedIn = state => Auth.state.LoggedIn
