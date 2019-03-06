import React from "react";

function TodosList(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
}
export default TodosList;
