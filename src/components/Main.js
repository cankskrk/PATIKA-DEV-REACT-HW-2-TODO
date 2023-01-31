// Packages
import React, { useState } from "react";

// Components
import Header from "./Header";

function Main() {
  // States
  const [allList, setAllList] = useState([]);

  // Functions
  const addAllList = (task) => {
    setAllList((prev) => {
      return [...prev, task];
    });
  };

  return (
    <div>
      <Header add={addAllList} />
      <div className="main">
        <input class="toggle-all" type="checkbox" />

        <ul class="todo-list">
          {allList.map((item, index) => (
            <li>
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label>{item.content}</label>
                <button class="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
