import { combineReducers } from "redux";
import {Auth as AuthReducer} from "./AuthReducer"

export default combineReducers({
    Auth: AuthReducer.reducer
})