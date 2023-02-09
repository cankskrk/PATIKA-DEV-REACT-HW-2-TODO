import React from "react";

function Button() {
  return (
    <div className="footer">
      <a href="#/" className="todo-count">
        <strong>2</strong>
        items left
      </a>

      <ul className="filters">
        <li>
          <a href="#/" id="All">
            All
          </a>
        </li>
        <li>
          <a href="#/" id="Active">
            Active
          </a>
        </li>
        <li>
          <a href="#/" id="Completed">
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </div>
  );
}

export default Button;
