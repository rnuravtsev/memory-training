import React, {useContext, useRef} from 'react';
import classnames from "classnames";
import GameLamp from "../GameLamp/GameLamp";
import {GameContext} from "../../store";
import {gameReset, gameWin} from "../../store/actions";

import "./gameGrid.css"

const GameGrid = () => {
    const {state, dispatch} = useContext(GameContext)
    const {lamps, fieldSize, sequence} = state

    let rightAttempt = useRef(0)

    const sequenceLength = sequence?.length

    const checkWin = () => {
        if (rightAttempt.current === sequenceLength) {
            dispatch(gameWin())
            dispatch(gameReset())
        }
    }

    const setRightAttempt = (value) => {
        if (value) {
            rightAttempt.current++
            checkWin()
        }
    }

    return (
        <div className={
            classnames("game__grid",
                {
                    [`game__grid--${fieldSize}`]: fieldSize,
                }
            )}
        >
            {lamps?.map((el, index) =>
                <GameLamp
                    sequence={sequence}
                    index={el}
                    key={index}
                    setRightAttempt={setRightAttempt}
                />
            )}
        </div>
    );
};

export default GameGrid;
