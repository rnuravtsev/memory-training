export const GameActions = {
    GAME_START: 'GAME_START',
    GAME_WIN: 'GAME_WIN',
    GAME_LOSE: 'GAME_LOSE',
    GAME_END: 'GAME_END',
    GAME_RESET: 'GAME_RESET',
    INCREASE_RIGHT_ATTEMPT: 'INCREASE_RIGHT_ATTEMPT',
    INCREASE_WRONG_ATTEMPT: 'INCREASE_WRONG_ATTEMPT',
}

export const startGame = () => ({
    type: GameActions.GAME_START,
})

export const increaseRightAttempt = () => ({
    type: GameActions.INCREASE_RIGHT_ATTEMPT,
})

export const increaseWrongAttempt = () => ({
    type: GameActions.INCREASE_WRONG_ATTEMPT,
})

export const gameWin = () => ({
    type: GameActions.GAME_WIN,
})

export const gameLose = () => ({
    type: GameActions.GAME_LOSE,
})

export const gameReset = () => ({
    type: GameActions.GAME_RESET,
})

export const gameEnding = () => ({
    type: GameActions.GAME_END,
})
