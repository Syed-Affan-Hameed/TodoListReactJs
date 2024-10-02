export function TodoListItem({completed, id, title, toggleCheck, DeleteTodoItem})
{
return(
    <li key={id}>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleCheck(id, e.target.checked)}
      />
      {title}
    </label>
    <button
      className="btn btn-danger"
      onClick={(e) => DeleteTodoItem(id)}
    >
      Delete
    </button>
  </li>
)
}