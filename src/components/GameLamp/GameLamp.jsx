import React, {useEffect, useState} from 'react';
import GameButton from "../GameButton/GameButton";

import classnames from 'classnames';
import './gameLamp.css';


/**
 *
 * @param index {number} - индекс элемента
 * @param lamp {boolean} - флаг лампы или кнопки
 * @param sequence {array} - Последовательность зажжённых ламп
 * @returns {JSX.Element}
 * @constructor
 */

const GameLamp = ({lamp, index, sequence}) => {
        const [lampIsOn, setLampIsOn] = useState(false);
        const match = sequence.some((el) => el === index);

        const onGameButtonClick = () => {
            if (match) {
                setLampIsOn(!lampIsOn)
            }
        }

        return (
            <div className="game__item">
                {
                    (lamp || lampIsOn)
                        ? <div className={classnames('game-lamp', {'active': match})}/>
                        : <div onClick={onGameButtonClick} className={classnames('game-button')}/>
                }
            </div>
        );
    }
;

export default GameLamp;
