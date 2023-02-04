import React, { useState } from "react";

function Footer({ filtered }) {
  const [filter, setFilter] = useState("");
  // Functions
  const handleClick = (event) => {
    setFilter(event.target.name);
    filtered(filter);
  };

  return (
    <div className="footer">
      <a href="#/" className="todo-count">
        <strong>2</strong>
        items left
      </a>

      <ul className="filters">
        <li>
          <a href="#/" onClick={handleClick} name="All" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={handleClick} name="Active">
            Active
          </a>
        </li>
        <li>
          <a href="#/" onClick={handleClick} name="Completed">
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </div>
  );
}

export default Footer;
