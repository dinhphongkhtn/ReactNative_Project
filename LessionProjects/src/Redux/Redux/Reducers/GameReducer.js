import { Bao, Bua, Keo } from "../../../assets/images";
import { PLAYER_CHANGE_SELECT } from "../actions/gameActions";

const initState ={
    player:'Iron man',
    arrayGame: [
        { Id: 1, Image: Bua, isSelect: false },
        { Id: 2, Image: Keo, isSelect: true },
        { Id: 3, Image: Bao, isSelect: false },
    ],
    score: 0,
    times: 9,
    playerChoose: { Id: 2, Image: Keo, isSelect: true },
    thanosChoose: { Id: 3, Image: Bao, isSelect: false },
    winner: null,
    currentSelect: 2,
}

const GameReducer = (state = initState, action)=>{
    
    switch (action.type) {
       
        case PLAYER_CHANGE_SELECT:
           state.playerChoose = action.payload;
           state.currentSelect = action.payload.Id;

           return {...state};
        default:
            return {...state};
    }
}

export default GameReducer;