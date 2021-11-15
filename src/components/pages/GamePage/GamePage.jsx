import React, {useState} from 'react';
import PropTypes from 'prop-types';
import GameLamp from "../../GameLamp/GameLamp";
import GameButton from "../../GameButton/GameButton";
import classnames from "classnames";
import './gamePage.css';

const GamePage = ({fieldSize = 9}) => {
    const [lamp, setLamp] = useState(false);

    const onGameButtonClick = () => {
       setLamp(!lamp)
    };

    const lamps = Array.from(Array(fieldSize));
    return (
        <div className="container game">
            <h1 className="page-title">Запомни в каком порядке горят лампочки и нажми Начать.</h1>
            <div className={
                classnames("game__grid",
                    {[`game__grid--${fieldSize}`]: fieldSize },
                    {"game__grid--lamp": lamp},
                    {"game__grid--button": !lamp}
                    )}
            >
                {lamps.map(() => <GameButton onClick={onGameButtonClick}/>)}
            </div>
        </div>
    );
};

GamePage.defaultProps = {
    fieldSize: 9
}

GamePage.propTypes = {
    fieldSize: PropTypes.number,
}

export default GamePage;
