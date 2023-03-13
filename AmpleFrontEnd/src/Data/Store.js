import { configureStore } from '@reduxjs/toolkit'
import { auth } from "./Reducers/authSlice"
import { live } from "./Reducers/livestreamSlice"
import { videos } from './Reducers/videoSlice'
import { mediaPlayer } from './Reducers/mediaPlayerslice'

export const store = configureStore({
  reducer: {
    auth, live, videos, mediaPlayer
  }
})

