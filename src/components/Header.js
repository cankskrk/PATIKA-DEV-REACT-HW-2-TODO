import React, { useState } from "react";

function Header({ add }) {
  // States
  const [task, setTask] = useState("");

  // Functions
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Header;
