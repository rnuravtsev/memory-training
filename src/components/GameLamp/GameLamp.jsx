import React, {useContext, useState} from 'react';
import GameButton from "../GameButton/GameButton";

import classnames from 'classnames';
import './gameLamp.css';
import {GameContext} from "../../store";
import {increaseRightAttempt, increaseWrongAttempt} from "../../store/actions";

/**
 *
 * @param index {number} - индекс элемента
 * @returns {JSX.Element}
 * @constructor
 */

const GameLamp = ({index}) => {
        const [lampIsOn, setLampIsOn] = useState(false)
        const {state, dispatch} = useContext(GameContext)

        const { sequence } = state

        const match = sequence?.some((el) => el === index)

        const onGameButtonClick = () => {
            if (match) {
                dispatch(increaseRightAttempt())
                setLampIsOn(!lampIsOn)
            } else {
                dispatch(increaseWrongAttempt())
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
