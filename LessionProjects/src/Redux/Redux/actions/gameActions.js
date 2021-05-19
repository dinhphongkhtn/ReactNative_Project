export const PLAYER_CHANGE_SELECT = 'PLAYER_CHANGE_SELECT';
export const PLAY_GAME = 'PLAY_GAME';

export const playerChangeSelect = (select) => {
    return {
        type: PLAYER_CHANGE_SELECT,
        payload: select
    }
}
