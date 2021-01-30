import "../App.css";

interface TodoProps {
  todo: any;
  index: number;
  removeTodo(index: number): any;
  completeTodo(index: number): any;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  removeTodo,
  completeTodo,
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};
