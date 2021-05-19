import { createStore } from "redux";
import countReducer from "./Reducers/countReducer";
import groupReducer from "./Reducers/groupReducers";

const store = createStore(groupReducer);

export default store;