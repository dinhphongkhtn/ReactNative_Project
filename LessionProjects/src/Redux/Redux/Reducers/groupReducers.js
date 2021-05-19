import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import GameReducer from "./GameReducer";
const groupReducer = combineReducers({
    grcountReducer: countReducer,
    gruserReducer: userReducer,
    GameReducer : GameReducer,
})

export default groupReducer;