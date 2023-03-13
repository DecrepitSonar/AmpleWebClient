import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isLoading: false, 
    error: ""
}

const getVideos = createAsyncThunk("videos/getVideos", id  => {
    if( id == undefined ){
        return axios.get(`http://localhost:8000/api/v1/watch`)
        .then( response => { return response })    
    }else{
        return axios.get(`http://localhost:8000/api/v1/watch?id=${id}`)
        .then( response => { return response })
    }
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
            state.data = action.payload.data
        }) 
        builder.addCase(getVideos.rejected, ( state ) => {
            state.isLoading = false 
        })
    }
})

export const videos = videoSlice.reducer
export const loadVideos = getVideos