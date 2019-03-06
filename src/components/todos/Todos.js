import React from "react";
import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";

import useTodos from "../hooks/useTodos";

function Todos() {
  const [todos, setTodos] = useTodos();
  const handle = todo => {
    setTodos(todos.concat(todo));
  };
  return (
    <div>
      <h2>Todos</h2>
      <TodosCreate setTodos={handle} />
      <TodosList todos={todos} />
    </div>
  );
}
export default Todos;
