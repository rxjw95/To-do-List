import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
const App = () => {
  return (
    <div className="App">
      <TodoListTemplate form={<Form />}>오늘 할 것들</TodoListTemplate>
    </div>
  );
};

export default App;
