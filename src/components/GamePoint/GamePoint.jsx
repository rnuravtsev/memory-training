import React from 'react';
import './gamePoint.css';

const GamePoint = () => {
    return (
        <div className="game-point">
            <p className="game-point__text">Выберите горящие лампочки</p>
            <div className="game-point__grid">
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item"/>
                <div className="game-point__item"/>
                <div className="game-point__item active"/>
                <div className="game-point__item active"/>
                <div className="game-point__item"/>
            </div>
        </div>
    );
};

export default GamePoint;
