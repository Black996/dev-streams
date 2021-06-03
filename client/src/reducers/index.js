import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";


export default combineReducers({
    auth: authReducer,
    streams: streamsReducer
})