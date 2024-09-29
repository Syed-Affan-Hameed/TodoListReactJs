import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem(""); // Clear the input after adding the item
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
      <form onSubmit={handleClick} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
        </div>
        <button type="submit" className="btn">
          Add To do item
        </button>
      </form>
      <h1 className="header">To do List</h1>
      <ul className="list">
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
