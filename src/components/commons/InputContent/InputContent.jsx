import React from 'react';
import PropTypes from 'prop-types';
import './inputContent.css';

const InputContent = ({label}) => {
    return (
        <div className="input-content">
            <label className="input-content__label">
                {label}
                <input className="input-content__input"/>
            </label>
        </div>
    );
};

InputContent.propTypes = {
  label: PropTypes.string,
};

export default InputContent;
