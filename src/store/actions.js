export const GameActions = {
    GAME_START: 'GAME_START',
    GAME_WIN: 'GAME_WIN',
    GAME_LOSE: 'GAME_LOSE',
    GAME_RESET: 'GAME_RESET',
}

export const startGame = () => ({
    type: GameActions.GAME_START,
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
