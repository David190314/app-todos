import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Completar el proyecto de React"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export default TodoSearch;
