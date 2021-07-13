import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    return (
      <div>
        <TodoItem contents="ㅎㅇ" />
        <TodoItem contents="ㅎㅇ" />
      </div>
    );
  }
}

export default TodoItemList;
