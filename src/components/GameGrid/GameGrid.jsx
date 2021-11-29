import React, {useContext, useRef} from 'react';
import classnames from "classnames";
import GameLamp from "../GameLamp/GameLamp";
import {GameContext} from "../../store";
import {gameReset, gameWin} from "../../store/actions";

import "./gameGrid.css"

const GameGrid = () => {
    const {state} = useContext(GameContext)
    const {lamps, fieldSize, sequence} = state

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
                    index={el}
                    key={index}
                />
            )}
        </div>
    );
};

export default GameGrid;
