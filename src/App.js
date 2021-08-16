import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
    id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리액트 소개', checked: false },
            { id: 1, text: 'JSX 사용해보기', checked: true },
            { id: 2, text: '라이프 사이클 이해하기', checked: false },
        ],
        color: '#343a40',
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value, // input 의 다음 바뀔 값
        });
    };

    handleCreate = () => {
        const { input, todos, color } = this.state;
        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color,
            }),
        });
    };

    handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex((todo) => todo.id === id);
        const selected = todos[index]; // 선택한 객체

        const nextTodos = [...todos]; // 배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
        };

        this.setState({
            todos: nextTodos,
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id),
        });
    };

    handleSelectColor = (color) => {
        this.setState({
            color,
        });
    };

    render() {
        const { input, todos, color } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelectColor,
        } = this;

        return (
            <TodoListTemplate
                //Palette 추가 [배열 colors, 선택된 color, colors 중 하나를 선택했을 때의 핸들러 ]
                palette={
                    <Palette
                        colors={colors}
                        selected={color}
                        onSelect={handleSelectColor}
                    />
                }
                form={
                    <Form
                        value={input}
                        color={color}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
