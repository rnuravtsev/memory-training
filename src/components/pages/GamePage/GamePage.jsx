import React, {useContext, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import GameFooter from "../../GameFooter/GameFooter";
import GameGrid from "../../GameGrid/GameGrid";
import { ToastContainer, toast } from 'react-toastify';

import {GameContext} from "../../../store/store";
import {gameEnding, gameLose, gameReset, gameWin} from "../../../store/actions";

import './gamePage.css';

const shuffleArr = (arr) => {
    return arr.map((value) => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

const GamePage = () => {
    const {state, dispatch} = useContext(GameContext)
    const {
        status,
        rightAttempt,
        wrongAttempt,
        gameEnd,
    } = state;

    const sequence = useMemo(() => shuffleArr(Array.from(Array(9)).map((el, i) => i)).slice(Math.floor(Math.max(Math.random() * 9, 3)), 9), [gameEnd]);

    let timeout

    const sequenceLength = sequence.length

    useEffect(() => {
        if (!gameEnd) {
            if (rightAttempt === sequenceLength) {
                dispatch(gameWin())
            }
            if (wrongAttempt > 0) {
                dispatch(gameLose())
            }
        }
    }, [rightAttempt, wrongAttempt])


    useEffect(() => {
        if (status) {
            toast(status)
            timeout = setTimeout(() => {
                dispatch(gameEnding())
                dispatch(gameReset())
            }, 1500)

        }
        return () => {
            clearTimeout(timeout)
        }
    }, [status])

    return (
            <div className="game-page">
                <div className="container game-page__wrapper">
                    <h1 className="game-page__title page-title">Запомни в каком порядке горят лампочки и нажми
                        Начать.</h1>
                    <GameGrid sequence={sequence}/>
                    <GameFooter/>
                    <ToastContainer autoClose={1500}/>
                </div>
            </div>
    );
};


GamePage.propTypes = {
    fieldSize: PropTypes.number,
}

export default GamePage;
