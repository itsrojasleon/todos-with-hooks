import React from "react";

function TodosList(props) {
  return (
    <div>
      {props.todos.map((todo, i) => (
        <div key={i}>
          <div>{todo.value}</div>
          <div>{todo.id}</div>
          <div onClick={() => props.onDelete(todo.id)}>✖️</div>
          {/*<input 
            checked={checked}
            onChange={toggle} 
            type="checkbox"
            />*/}
        </div>
      ))}
    </div>
  );
}
export default TodosList;
