import React from "react";
import CreateToDo from "./components/CreateToDo";
import { ReadToDo } from "./components/ReadToDo";

function App(){
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.list);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [])
  return (
    <div>
      <CreateToDo />
      <h3>To-Do List</h3>
      <ReadToDo todos = {todos}/>
    </div>
  );
}

export default App;