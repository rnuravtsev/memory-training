import React, {useContext, useEffect, useState} from 'react';

import classnames from 'classnames';
import './gameLamp.css';
import {GameContext} from "../../store/store";
import {increaseRightAttempt, increaseWrongAttempt} from "../../store/actions";

/**
 *
 * @param index {number} - индекс элемента
 * @param sequence {array} - последовательность ламп
 * @returns {JSX.Element}
 * @constructor
 */

const GameLamp = ({index, sequence}) => {
        const [lampIsOn, setLampIsOn] = useState(false)
        const {state, dispatch} = useContext(GameContext)
        const {gameStart} = state

        const match = sequence?.some((el) => el === index)

        useEffect(() => {
            setLampIsOn(false)
        }, [sequence])

        const onGameButtonClick = () => {
            if (match) {
                dispatch(increaseRightAttempt())
                setLampIsOn(true)
            } else {
                dispatch(increaseWrongAttempt())
            }
        }

        return (
            <div className="game__item">
                {
                    (gameStart || lampIsOn)
                        ? <div className={classnames('game-lamp', {'active': match})}/>
                        : <div onClick={onGameButtonClick} className={classnames('game-button')}/>
                }
            </div>
        );
    }
;

export default GameLamp;
