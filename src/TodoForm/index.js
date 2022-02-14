import React from "react";
import { TodoContext } from "../TodoContext";
import "./Form.css";

function TodoForm(props) {
  const [newTodo, setNewTodo] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);

  const onCancel = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  const onSubmit = (event) => {
    event.preventDefault(false)
    if (newTodo.length > 0) {
      addTodo(newTodo)
      props.setOpenModal((prevState) => !prevState);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea
        placeholder="Comenzar el curso de Python"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className="TodoForm-buttonContainer ">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className=" TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
