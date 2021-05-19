export const COUNT_UP = 'COUNT_UP'
export const COUNT_DOWN = 'COUNT_DOWN'

export const userCountUp = (payload) => {
    return {
        type: COUNT_UP,
        payload: payload
    }
}

export const userCountDown = (payload) => {
    return {
        type: COUNT_DOWN,
        payload: payload
    }
}