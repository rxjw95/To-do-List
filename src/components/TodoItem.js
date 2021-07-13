import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { contents, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); //event의 확산 방지, 부모 이벤트로 전달이 되지 않게 한다.
            onRemove(id);
          }}
        >
          &times;
        </div>

        <div className={`todo-text ${checked && "checked"}`}>
          <div>{contents}</div>
        </div>
        <div>{checked && <div className="check-mark">✓</div>}</div>
      </div>
    );
  }
}

export default TodoItem;
