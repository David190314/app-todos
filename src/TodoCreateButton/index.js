import React from "react";
import "./TodoCreateButton.css";

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};

export default CreateTodoButton;
