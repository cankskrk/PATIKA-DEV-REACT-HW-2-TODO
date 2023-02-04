// Packages
import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  // States -----------------
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState("All");
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

  const filterList = (f) => {
    setFilter(f);
    if (filter === "All") {
      setFilteredList((prev) => {
        return [...prev];
      });
    } else if (filter === "Active") {
      const activeList = list.filter((i) => {
        return i.status === false;
      });
      setFilteredList(activeList);
    } else if (filter === "Completed") {
      const completedList = list.filter((i) => {
        return i.status === true;
      });
      setFilteredList(completedList);
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
      <Footer filtered={filterList} />
    </div>
  );
}

export default Main;
