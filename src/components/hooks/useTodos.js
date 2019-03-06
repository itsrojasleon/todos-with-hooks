import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);

  const onSetTodos = todo => {
    setTodos(todos.concat(todo));
  };
  const onDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return [todos, setTodos, onSetTodos, onDelete];
}
export default useTodos;
