import React, { useState } from 'react'

const AddTodoForm = (props) => {
    // this is the form value
    const [newItem, setNewItem] = useState("");

    function handleClick(e) {
        e.preventDefault();
        if(newItem===""){
            return;
        }
        props.addTodo(newItem);
        setNewItem(""); // Clear the input after adding the item
      }
    
  return (
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
  )
}

export default AddTodoForm