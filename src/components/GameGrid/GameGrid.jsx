import React, {useContext} from 'react';
import classnames from "classnames";
import GameLamp from "../GameLamp/GameLamp";
import {GameContext} from "../../store/store";

import "./gameGrid.css"

/**
 *
 * @param sequence {array} последовательность ламп
 * @returns {JSX.Element}
 * @constructor
 */

const GameGrid = ({sequence}) => {
    const {state} = useContext(GameContext)
    const {lamps, fieldSize} = state

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
                />
            )}
        </div>
    );
};

export default GameGrid;
