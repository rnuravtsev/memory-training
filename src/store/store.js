import React from "react";
import {GameActions} from "./actions";

const lamps = Array.from(Array(9)).map((el, i) => i);

export const initialState = {
    gameStart: true,
    gameEnd: false,
    status: '',
    rightAttempt: 0,
    wrongAttempt: 0,
    fieldSize: 9,
    lamps,
}

export const GameContext = React.createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case GameActions.GAME_START:
            return {
                ...state,
                gameStart: false
            }
        case GameActions.GAME_END:
            return {
                ...state,
                gameEnd: true,
            }
        case GameActions.INCREASE_RIGHT_ATTEMPT:
            return {
                ...state,
                rightAttempt: state.rightAttempt + 1
            }
        case GameActions.INCREASE_WRONG_ATTEMPT:
            return {
                ...state,
                wrongAttempt: state.wrongAttempt + 1
            }
        case GameActions.GAME_WIN:
            return {
                ...state,
                status: 'You win! Congratulations!'
            }
        case GameActions.GAME_LOSE:
            return {
                ...state,
                status: 'You Lose! But you can! Try again!'
            }
        case GameActions.GAME_RESET:
            return initialState
        default:
            throw new Error('Undefined action.type in reducer')
    }
}
