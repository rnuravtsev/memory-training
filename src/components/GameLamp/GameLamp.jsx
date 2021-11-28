import React, {useContext, useState} from 'react';
import GameButton from "../GameButton/GameButton";

import classnames from 'classnames';
import './gameLamp.css';
import {GameContext} from "../../store";
import {gameLose, gameReset} from "../../store/actions";

/**
 *
 * @param index {number} - индекс элемента
 * @param initialStateOfButton {boolean} - флаг лампы или кнопки
 * @param setRightAttempt {function} - Увеличивает количество успешных попыток
 * @returns {JSX.Element}
 * @constructor
 */

const GameLamp = ({index, setRightAttempt}) => {
        const [lampIsOn, setLampIsOn] = useState(false)
        const {state, dispatch} = useContext(GameContext)

        const { sequence } = state

        const match = sequence.some((el) => el === index)

        const onGameButtonClick = () => {
            if (match) {
                setRightAttempt(match);
                setLampIsOn(!lampIsOn)
            } else {
                dispatch(gameLose())
                dispatch(gameReset())
            }
        }

        return (
            <div className="game__item">
                {
                    (state.initialStateOfButton || lampIsOn)
                        ? <div className={classnames('game-lamp', {'active': match})}/>
                        : <div onClick={onGameButtonClick} className={classnames('game-button')}/>
                }
            </div>
        );
    }
;

export default GameLamp;
