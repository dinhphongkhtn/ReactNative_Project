import React from "react";
import { Bao, Bua, Keo } from "../../../assets/images";
import { PLAYER_CHANGE_SELECT, PLAY_GAME, RESET_GAME } from "../actions/gameActions";

const initState = {
    player: 'Iron man',
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


const changeTimes = (state, value) => {

    state.times = state.times + value;

}

const getResult = (state) => {
    const { playerChoose, thanosChoose } = state;

    let winner = 'none';

    if (playerChoose.Id === thanosChoose.Id) return winner;

    if (playerChoose.Image === Keo) {

        winner = thanosChoose.Image === Bao ? 'player' : 'thanos';
    } else if (playerChoose.Image == Bua) {
        winner = thanosChoose.Image === Keo ? 'player' : 'thanos';
    }
    else if (playerChoose.Image === Bao) {
        winner = thanosChoose.Image === Bua ? 'player' : 'thanos';
    }
    return winner;
}

const setThanosSelect = (state) => {
    let rd = Math.floor(Math.random() * 3 + 1);

    let _thanosChoose = state.arrayGame.find(a => a.Id === rd);

    state.thanosChoose = _thanosChoose;

    console.log(_thanosChoose);
}
const resetGame = (state) => {

    state.score = 0;
    state.times = 9;
    
}
const playGame = (state) => {


    if (state.playerChoose === undefined) {
        alert("Select your choose!");
        return;
    }



    let winner = getResult(state);
    console.log(winner);
    if (winner === 'none') return;
    if (winner === 'player') {
        state.score = state.score + 1;
    }
    else if (winner === 'thanos') {

        state.times = state.times - 1;
    }
  
}
let currentInterval;


const GameReducer = (state = initState, action) => {

    switch (action.type) {

        case PLAYER_CHANGE_SELECT:
            state.playerChoose = action.payload;
            state.currentSelect = action.payload.Id;

            return { ...state };
        case PLAY_GAME:
            // console.log(action.type);
            // runPlay(state);
            state.thanosChoose = state.arrayGame[action.payload];
            playGame(state);
            //  console.log(clone.times);
            return {...state};
        case RESET_GAME:
            resetGame(state);
            return { ...state };
        default:
            return { ...state };
    }
}

export default GameReducer;