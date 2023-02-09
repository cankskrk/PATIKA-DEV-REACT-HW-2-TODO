import React, { useState } from "react";

function Footer() {
  const [filter, setFilter] = useState("All");
  // Functions
  const handleClick = (event) => {
    const selected = event.target.name;
    setFilter(selected);
  };

  return (
    <div className="footer">
      <a href="#/" className="todo-count">
        <strong>2</strong>
        items left
      </a>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={handleClick}
            name="All"
            className={filter === "Completed" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleClick}
            name="Active"
            className={filter === "Completed" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleClick}
            name="Completed"
            className={filter === "Completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </div>
  );
}

export default Footer;
