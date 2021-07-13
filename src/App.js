import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
const App = () => {
  return (
    <div className="App">
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    </div>
  );
};

export default App;
