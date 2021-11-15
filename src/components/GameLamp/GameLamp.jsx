import React, {useState} from 'react';
import classnames from 'classnames';
import './gameLamp.css';

const GameLamp = () => {
    const [lampIsOn, setlampIsOn] = useState(false);
    return (
        <div className={classnames('game-lamp', {'active' : lampIsOn})}>

        </div>
    );
};

export default GameLamp;
