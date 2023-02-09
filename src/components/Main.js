// Packages
import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  // States -----------------
  const [list, setList] = useState([]);

  //-------------------------

  // Functions --------------
  const addList = (task) => {
    setList((prev) => {
      return [...prev, task];
    });
  };

  const handleCheck = (event) => {
    list.forEach((i) => {
      if (i.id === event.target.id) {
        i.status = !i.status;
      }
    });
  };

  //-------------------------

  return (
    <div>
      <Header add={addList} />
      <div className="main">
        <input className="toggle-all" type="checkbox" />

        <ul className="todo-list">
          {list.map((item) => (
            <li className={item.status ? "completed" : ""} key={item.id}>
              <div className="view">
                <input
                  id={item.id}
                  className="toggle"
                  type="checkbox"
                  onChange={handleCheck}
                />
                <label>{item.content}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
