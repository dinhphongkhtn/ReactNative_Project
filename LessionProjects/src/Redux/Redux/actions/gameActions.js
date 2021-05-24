export const PLAYER_CHANGE_SELECT = 'PLAYER_CHANGE_SELECT';
export const PLAY_GAME = 'PLAY_GAME';
export const RESET_GAME = 'RESET_GAME';
export const GAME_RESULT = 'GAME_RESULT';

export const playerChangeSelect = (select) => {
    return {
        type: PLAYER_CHANGE_SELECT,
        payload: select
    }
}

export const runPlay = ()=>{
    return {
        type: PLAY_GAME,
        
    }
}

export const resetGame = ()=>{
    return {
        type: RESET_GAME,
        
    }
}