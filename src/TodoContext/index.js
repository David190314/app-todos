import React from "react";
import useLocalStorage from "../Hooks/LocalStorage";
import { Defaultodos } from "../Data/data";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading
  } = useLocalStorage("TODOS_V1", Defaultodos);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((element) => !!element.completed).length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    } else {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
    }
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newArray = [...todos];
    newArray.splice(todoIndex, 1);
    saveTodos(newArray);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        completedTodos,
        todos,
        searchValue,
        setSearchValue,
        searchedTodos,
        saveTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
