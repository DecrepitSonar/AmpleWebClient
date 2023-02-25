import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videos: [],
    isLoading: false, 
    error: ""
}
const getVideos = createAsyncThunk("videos/getVideos", (id ) => {
    return axios.get(`http://localhost:8000/api/v1/videos?id=${id}`)
    .then( response => { return response })
})

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getVideos.pending,  state => {
            state.isLoading = true
        })
        builder.addCase(getVideos.fulfilled, ( state, action ) => {
            state.isLoading = false 
            state.videos = action.payload.data
        }) 
        builder.addCase(getVideos.rejected, ( state, action ) => {
            state.isLoading = false 
            console.log(  action.payload.error )
        })
    }

})

export const videos = videoSlice.reducer
export const loadVideos = getVideos