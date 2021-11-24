import React, {useEffect, useState} from 'react';
import classnames from "classnames";
import GameLamp from "../GameLamp/GameLamp";
import "./gameGrid.css"

const GameGrid = ({lamps, fieldSize, sequence}) => {
    const [lamp, setLamp] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLamp(!lamp)
        }, 3000)
    }, [])

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
                    lamp={lamp}
                    sequence={sequence}
                    index={el}
                    key={index}
                />
            )}
        </div>
    );
};

export default GameGrid;
