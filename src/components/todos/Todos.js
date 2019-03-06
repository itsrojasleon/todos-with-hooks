import React from "react";
import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";

import useTodos from "../hooks/useTodos";

function Todos() {
  const [todos, setTodos, onSetTodos, onDelete] = useTodos();
  return (
    <div>
      <h2>Todos</h2>
      <TodosCreate setTodos={onSetTodos} />
      <TodosList onDelete={onDelete} todos={todos} />
    </div>
  );
}
export default Todos;
