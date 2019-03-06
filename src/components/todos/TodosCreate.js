import React from "react";

function TodosCreate(props) {
  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.setTodos(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} type="text" />
    </form>
  );
}
export default TodosCreate;
