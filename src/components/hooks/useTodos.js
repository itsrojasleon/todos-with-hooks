import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(todos.concat("hello"));
  }, []);
  return [todos, setTodos];
}
export default useTodos;
