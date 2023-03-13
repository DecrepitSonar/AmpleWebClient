import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    nowPlaying: {},
    comments: [],
}
const mediaPlayerSllice =  createSlice({
    name: "mediaPlayer",
    initialState,
    reducers: {
        setNowPlaying: (state, action) => {},
        postComment: ( state, action ) => {
            state.comments.push( action.payload)
        }
    }

})

export const mediaPlayer = mediaPlayerSllice.reducer
export const { postComment } = mediaPlayerSllice.actions