import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import GameFooter from "../../GameFooter/GameFooter";
import GameGrid from "../../GameGrid/GameGrid";

import './gamePage.css';
import {GameContext} from "../../../store";

const GamePage = () => {
    const {state: {status}} = useContext(GameContext)

    useEffect(() => {
        if (status) {
            alert(status)
        }
    }, [status])

    return (
            <div className="game-page">
                <div className="container game-page__wrapper">
                    <h1 className="game-page__title page-title">Запомни в каком порядке горят лампочки и нажми
                        Начать.</h1>
                    <GameGrid/>
                    <GameFooter/>
                </div>
            </div>
    );
};


GamePage.propTypes = {
    fieldSize: PropTypes.number,
}

export default GamePage;
