import React, { useState } from "react";

function Header({ add }) {
  // States
  const [task, setTask] = useState({ id: "", content: "", status: false });
  const [idNumber, setIdNumber] = useState(0);

  // Functions
  const handleChange = (event) => {
    setTask((prev) => {
      const newValue = event.target.value;
      return { ...prev, content: newValue };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIdNumber(idNumber + 1);
    task.id = idNumber;
    add(task);
    setTask({ id: "", content: "", status: false });
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
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
