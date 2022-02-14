import React from "react";
import TodoCounter from "../TodoCounter/index";
import TodoSearch from "../TodoSearch/index";
import TodoList from "../TodoList/TodoList";
import CreateTodoButton from "../TodoCreateButton/index";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

const APPUI = () => {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export { APPUI };
