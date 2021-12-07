import React, {useContext, useEffect, useRef} from 'react';
import './gameFooter.css';
import {GameContext} from "../../store/store";
import {startGame} from "../../store/actions"

const GameFooter = () => {
    const {dispatch} = useContext(GameContext)
    const onButtonClick = () => {
        dispatch(startGame())
    }

    return (
        <div className="game-footer">
            <button onClick={onButtonClick} className="game-footer__button" type="button">Начать</button>
        </div>
    )
};

export default GameFooter;
