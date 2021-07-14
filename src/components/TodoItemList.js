import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    this.shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.props.todos;
    }
    
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        contents={text}
        id={id}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
