import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onkeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onkeyPress} />
      <div className="create-button" onClick={onCreate}>
        등록
      </div>
    </div>
  );
};

export default Form;
