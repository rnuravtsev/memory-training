import React, {useContext} from 'react';
import './gameFooter.css';
import {GameContext} from "../../store";
import {startGame} from "../../store/actions"

const GameFooter = () => {
    const {dispatch} = useContext(GameContext)
    const onButtonClick = () => {
        dispatch(startGame())
    }

    const onGameButtonMouseMove = () => {
        console.log('Mouse move')
    }

    const debounce = (cb, time = 1000) => {
        let timeout
        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => cb(), time)
        }
    }

    return (
        <div className="game-footer">
            <button onClick={onButtonClick} onMouseMove={debounce(onGameButtonMouseMove)} className="game-footer__button" type="button">Начать</button>
        </div>
    )
};

export default GameFooter;
