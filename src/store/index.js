import React from "react";
import {GameActions} from "./actions";

const shuffleArr = (arr) => {
    return arr.map((value) => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

const lamps = shuffleArr(Array.from(Array(9)).map((el, i) => i));
const sequence = shuffleArr(Array.from(Array(9)).map((el, i) => i).slice(Math.random() * 10));

const gameInit = () => (initialState)

export const GameContext = React.createContext()

export const initialState = {
    initialStateOfButton: true,
    status: '',
    fieldSize: 9,
    lamps,
    sequence
}

export const reducer = (state, action) => {
    switch (action.type) {
        case GameActions.GAME_START:
            return {
                ...state,
                initialStateOfButton: false
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
            return gameInit()
        default:
            throw new Error('Undefined action.type in reducer')
    }
}
