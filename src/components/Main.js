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

  const handleCheck = (event) => {
    allList.forEach((i) => {
      console.log(i);
    });
  };

  return (
    <div>
      <Header add={addAllList} />
      <div className="main">
        <input className="toggle-all" type="checkbox" />

        <ul className="todo-list">
          {allList.map((item) => (
            <li key={item.id}>
              <div className="view">
                <input
                  id={item.id}
                  className="toggle"
                  type="checkbox"
                  onClick={handleCheck}
                  checked={item.status}
                  readOnly
                />
                <label>{item.content}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
