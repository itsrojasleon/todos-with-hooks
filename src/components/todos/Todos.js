import React from "react";
import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";

import useTodos from "../hooks/useTodos";

function Todos() {
  const [todos, setTodos] = useTodos();
  const onSetTodos = todo => {
    setTodos(todos.concat(todo));
  };
  const onDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div>
      <h2>Todos</h2>
      <TodosCreate setTodos={onSetTodos} />
      <TodosList onDelete={onDelete} todos={todos} />
    </div>
  );
}
export default Todos;
