import React, {useReducer, useMemo} from 'react';
import {initialState, reducer} from "../../../store";
import {GameContext} from "../../../store";
import GamePage from "./GamePage";

const GamePageContainer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GameContext.Provider value={{state, dispatch}}>
            <GamePage/>
        </GameContext.Provider>
    );
};

export default GamePageContainer;
