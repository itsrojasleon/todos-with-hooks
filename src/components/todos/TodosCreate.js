import React from "react";

function TodosCreate(props) {
  const [value, setValue] = React.useState("");
  const [id, setId] = React.useState(0);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setId(id + 1);
    props.setTodos({ value, id, completed: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Add a todo</div>
      <input value={value} onChange={handleChange} type="text" />
    </form>
  );
}
export default TodosCreate;
