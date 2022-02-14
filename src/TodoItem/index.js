import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

const TodoItem = ({ text, completed, completeTodos, deleteTodos }) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => completeTodos(text)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={() => deleteTodos(text)}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </li>
  );
};

export default TodoItem;
