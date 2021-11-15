import React from 'react';
import './gameOption.css';

const GameOption = () => {
    return (
        <div className="game-option">
            <p className="game-option__text">Количество квадратиков</p>
            <div className="game-option__wrapper">
                <button className="game-option__button active" type="button">3x3</button>
                <button className="game-option__button" type="button">5x5</button>
            </div>
        </div>
    );
};

export default GameOption;
