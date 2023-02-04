// Packages
import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  // States -----------------
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState("All");
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

  const filterList = (filter) => {
    setFilteredList(filter);
    if (filter === "All") {
      setList((prev) => {
        return [...prev];
      });
    } else if (filter === "Active") {
      const activeList = list.filter((i) => {
        return i.status === false;
      });
      setList([...activeList]);
    } else if (filter === "Completed") {
      const completedList = list.filter((i) => {
        return i.status === true;
      });
      setList([...completedList]);
    }
  };
  //-------------------------

  return (
    <div>
      <Header add={addList} />
      <div className="main">
        <input className="toggle-all" type="checkbox" />

        <ul className="todo-list">
          {list.map((item) => (
            <li key={item.id}>
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
      <Footer filter={filterList} />
    </div>
  );
}

export default Main;
