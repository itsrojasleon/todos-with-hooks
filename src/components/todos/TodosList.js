import React from "react";

function TodosList(props) {
  const [checked, setChecked] = React.useState();
  const onCheck = (e, i) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    /* Syntax for multiple inputs
      is like:
      setChecked(input1: e.target.value)
      setChecked(input2: e.target.value)
      ...
      It's pretty cool. */
    setChecked([name]: value);
  }
  return (
    <div>
      {props.todos.map((todo, i) => (
        <div style={{
          display: 'flex'
        }} key={i}>
          <div>{todo.value}</div>
          <div onClick={() => props.onDelete(todo.id)}>✖️</div>
          {/*<input
            type="checkbox"
            onChange={onCheck}
            name="input"
            />*/}
        </div>
      ))}
    </div>
  );
}
export default TodosList;
