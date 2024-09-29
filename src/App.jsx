import { useEffect, useState } from "react";
import "./styles.css";
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS");
    if(localValue== null){
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(()=>{
localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos]);

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleCheck(todoId, completed) {
    setTodos((currentTodos) => {
      let modifiedTodoList = currentTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
      return modifiedTodoList;
    });
  }
  function DeleteTodoItem(todoId) {
    setTodos((currentTodos) => {
      let modifiedTodoList = currentTodos.filter((todo) => {
        return todo.id !== todoId;
      });
      return modifiedTodoList;
    });
  }

  return (
    <>
    <AddTodoForm addTodo ={addTodo}/>
      <h1 className="header">To do List</h1>
      <ul className="list">
        {(todos.length===0)?"No todos":""}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleCheck(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={(e) => DeleteTodoItem(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
