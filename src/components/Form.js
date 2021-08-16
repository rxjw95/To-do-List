import React from 'react';
import './Form.css';

const Form = ({ value, color, onChange, onCreate }) => {
    return (
        <div className='form'>
            <input
                value={value}
                onChange={onChange}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') onCreate();
                }}
                style={{ color }}
            />
            <div className='create-button' onClick={onCreate}>
                등록
            </div>
        </div>
    );
};

export default Form;
