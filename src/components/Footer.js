import React from "react";

function Footer({ filter }) {
  // Functions
  const handleClick = (event) => {
    filter(event.target.name);
  };

  return (
    <div className="footer">
      <a className="todo-count">
        <strong>2</strong>
        items left
      </a>

      <ul className="filters">
        <li>
          <a onClick={handleClick} name="All" className="selected">
            All
          </a>
        </li>
        <li>
          <a onClick={handleClick} name="Active">
            Active
          </a>
        </li>
        <li>
          <a onClick={handleClick} name="Completed">
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </div>
  );
}

export default Footer;
