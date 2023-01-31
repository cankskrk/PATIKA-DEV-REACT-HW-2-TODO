import React, { useState } from "react";

function Header({ add }) {
  // States
  const [task, setTask] = useState({ id: "", content: "", status: false });

  // Functions
  const handleChange = (event) => {
    setTask((prev) => {
      const newValue = event.target.value;
      return { ...prev, content: newValue };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add(task);
    setTask({ id: "", content: "", status: "" });
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          class="new-todo"
          value={task.content}
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Header;
