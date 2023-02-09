import React, { useState } from "react";

function Footer() {
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
            id="All"
            className={filter === "Completed" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleClick}
            id="Active"
            className={filter === "Completed" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleClick}
            id="Completed"
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
