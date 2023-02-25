import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [
        {title: "",
        items: []}
    ],
    isLoading: false,
    error: ""
}

const loadStreams = createAsyncThunk("live/loadStreams", ( id ) => {

        if( id == undefined ){
            return axios.get(`http://localhost:8000/api/v1/live`)
            .then( response => {return response })
        }else{
            return axios.get(`http://localhost:8000/api/v1/live?id=${id}`)
            .then( response => {return response })
        } 
})

const livestreamSlice = createSlice({
    name: "live",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadStreams.pending, state => {
            state.isLoading = true
        })
        builder.addCase(loadStreams.fulfilled, ( state, action ) => {
            state.data = action.payload.data
            state.isLoading = false 
        })
        builder.addCase(loadStreams.rejected, (state, action) => {
            state.isLoading = false
            console.log( action.error)
        })
    }
})

export const live = livestreamSlice.reducer
export const loadLiveContent = loadStreams