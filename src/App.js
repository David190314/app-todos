import React from "react";
import { APPUI } from "./APPUI/APPUI";
import { TodoProvider } from "./TodoContext/index.js";

function App() {
  return (
    <TodoProvider>
      <APPUI />
    </TodoProvider>
  );
}

export default App;
