import React from 'react';
import cross from '../../../img/cross.svg';
import GamePoint from "../../GamePoint/GamePoint";
import InputContent from "../../commons/InputContent/InputContent";
import Exercises from "../../Exercises/Exercises";
import GameOption from "../../GameOption/GameOption";
import "./adminPage.css";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <div className="admin-page__wrapper">
                <h2 className="admin-page__title">Добавить упражнение</h2>
                <button className="admin-page__button" type="button">
                    <img src={cross} alt="cross" width="20" height="20"/>
                </button>
            </div>
            <div className="admin-page__wrapper">
                <Exercises/>
            </div>
            <div className="admin-page__wrapper">
                <InputContent label="Задание шага 1"/>
            </div>
            <div className="admin-page__wrapper">
                <GameOption/>
            </div>
            <div className="admin-page__wrapper">
                <GamePoint/>
            </div>
            <div className="admin-page__wrapper">
               <InputContent label="Задание шага 2"/>
            </div>
        </div>
    );
};

export default AdminPage;
