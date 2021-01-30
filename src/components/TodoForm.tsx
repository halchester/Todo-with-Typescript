import "../App.css";
import React from "react";

interface TodoFormProps {
  addTodo(text: string): any;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
