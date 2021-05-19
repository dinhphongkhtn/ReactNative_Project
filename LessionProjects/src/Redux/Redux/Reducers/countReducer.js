import { COUNT_DOWN, COUNT_UP } from "../actions/countActions";

const initState = {
    number: 10
}

const countReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case COUNT_UP:
            state.number = state.number + action.payload;
            
            return {...state};
        case COUNT_DOWN:
            state.number = state.number - action.payload;
            return {...state};
        default:
            return state;
    }
}

export default countReducer;