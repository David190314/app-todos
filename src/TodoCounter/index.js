import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, todos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {todos.length} TODOs
    </h2>
  );
};

export default TodoCounter;
