import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import GameFooter from "../../GameFooter/GameFooter";
import GameGrid from "../../GameGrid/GameGrid";

import './gamePage.css';
import {GameContext} from "../../../store";
import {gameLose, gameReset, gameWin} from "../../../store/actions";

const GamePage = () => {
    const {state, dispatch} = useContext(GameContext)
    const {
        status,
        rightAttempt,
        wrongAttempt,
        sequence
    } = state;

    const sequenceLength = sequence?.length

    const checkGameProcess = () => {
        if (rightAttempt === sequenceLength) {
            dispatch(gameWin())
        }
        if (wrongAttempt > 0) {
            dispatch(gameLose())
        }
    }

    useEffect(() => {
        checkGameProcess()
    })


    useEffect(() => {
        if (status) {
            alert(status)
        }
    }, [status, rightAttempt, sequence])

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
