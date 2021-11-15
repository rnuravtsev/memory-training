import React from 'react';
import PropTypes, {string} from 'prop-types';
import './exercises.css';

const mockExercises = ['Порядок', 'Отметь', 'Пазл', 'Геоборд', 'Мемори', 'Найди кота', 'Путь', 'Пары', 'Лабиринт', 'Судоку', 'Сгруппируй', 'Выбор', 'Закрась', 'Графический диктант', 'Схема', 'Путь по картинкам']

const Exercises = ({exercises  = mockExercises}) => {
    return (
        <div className="exercises">
            <ul className="exercises__list">
                {
                    exercises.map((el, index) => (
                        <li className="exercises__item" key={index}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

Exercises.propTypes = {
    mockExercises: PropTypes.arrayOf(string),
};

export default Exercises;
