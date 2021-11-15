import React, {useState} from 'react';
import classnames from 'classnames';
import './gameButton.css';

const GameLamp = () => {
    const [buttonIsOn, setButtonIsOn] = useState(false);
    return (
        <div className={classnames('game-button', {'active' : buttonIsOn})}>

        </div>
    );
};

export default GameLamp;
