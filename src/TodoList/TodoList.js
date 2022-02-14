import React from "react";
import TodoItem from "../TodoItem";
import "./TodoList.css";
import { TodoContext } from "../TodoContext";

const TodoList = () => {
  return (
    <TodoContext.Consumer>
      {({ searchedTodos, completeTodos, loading, deleteTodos, error }) => {
        return (
          <>
            {error && (
              <p>Estamos teniendo problemas porfavor recarga la pagina</p>
            )}
            {loading && (
              <p>Estamos obteniendo la información del servidor...</p>
            )}
            {!loading && !searchedTodos.loading && <p>¡Crea tu primer TODO!</p>}
            <section>
              <ul>
                {searchedTodos.map((todo, i) => (
                  <TodoItem
                    key={i}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodos={completeTodos}
                    deleteTodos={deleteTodos}
                  />
                ))}
              </ul>
            </section>
          </>
        );
      }}
    </TodoContext.Consumer>
  );
};

export default TodoList;
