import React from "react";
import "./Form.css";

const Form = ({ value, color, onChange, onCreate, onkeyPress }) => {
  return (
    <div className="form">
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onkeyPress}
        style={{ color }}
      />
      <div className="create-button" onClick={onCreate}>
        등록
      </div>
    </div>
  );
};

export default Form;
