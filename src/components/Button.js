import React, { useState } from "react";

function Button({ list, setList, setStatus }) {
  // State
  const [select, setSelect] = useState(["selected", "", ""]);

  const unCompleted = list.filter(
    (completed) => completed.isCompleted === false
  );

  // Functions

  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setStatus("all");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setStatus("active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setStatus("completed");
        break;
      default:
    }
  };

  return (
    <div className="footer">
      <a href="#/" className="todo-count">
        <strong>{unCompleted.length}</strong>
        items left
      </a>

      <ul className="filters">
        <li>
          <a href="#/" className={select[0]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={select[1]}
            id="Active"
            onClick={selectedButton}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={select[2]}
            id="Completed"
            onClick={selectedButton}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </div>
  );
}

export default Button;
