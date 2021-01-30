import React from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={index}
              index={index}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
