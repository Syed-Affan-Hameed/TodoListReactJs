import { TodoListItem } from "./TodolistItem";

export function TodoList({ todos , toggleCheck, DeleteTodoItem}) {
  return (
    <ul className="list">
      {todos.length === 0 ? "No todos" : ""}
      {todos.map((todo) => (
        <TodoListItem
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          toggleCheck={toggleCheck}
          DeleteTodoItem={DeleteTodoItem}
        />
      ))}
    </ul>
  );
}
