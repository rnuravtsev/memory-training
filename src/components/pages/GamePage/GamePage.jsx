import React from 'react';
import PropTypes from 'prop-types';
import './gamePage.css';
import GameFooter from "../../GameFooter/GameFooter";
import GameGrid from "../../GameGrid/GameGrid";

const GamePage = ({lamps, sequence, fieldSize}) => {
    return (
        <div className="game-page">
            <div className="container game-page__wrapper">
                <h1 className="game-page__title page-title">Запомни в каком порядке горят лампочки и нажми Начать.</h1>
                <GameGrid lamps={lamps} sequence={sequence} fieldSize={fieldSize}/>
                <GameFooter/>
            </div>
        </div>
    );
};


GamePage.propTypes = {
    fieldSize: PropTypes.number,
}

export default GamePage;
