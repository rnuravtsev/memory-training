import React, {useMemo} from 'react';
import GamePage from "./GamePage";

const GamePageContainer = ({fieldSize}) => {
    const shuffleArr = (arr) => {
        return arr.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    const lamps = useMemo(() => shuffleArr(Array.from(Array(fieldSize)).map((el, i) => i)), [fieldSize]);
    const sequence = useMemo(() => shuffleArr(Array.from(Array(fieldSize)).map((el, i) => i).slice(Math.random() * 10)), [fieldSize]);

    return (
        <div>
            <GamePage lamps={lamps} sequence={sequence} fieldSize={fieldSize}/>
        </div>
    );
};

export default GamePageContainer;
