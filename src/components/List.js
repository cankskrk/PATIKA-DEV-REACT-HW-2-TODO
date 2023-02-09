import React from "react";

function List({ list, setList, status }) {
  // Functions
  const handleChange = (id) => {
    setList((prev) =>
      prev.map((listItem) =>
        listItem.id
          ? { ...listItem, isCompleted: !listItem.isCompleted }
          : listItem
      )
    );
  };

  const deleteButton = (event) => {
    setList(list.filter((item) => item.id !== event.id));
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {list.map((listItem) => (
            <li
              key={listItem.id}
              className={listItem.isCompleted ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  value={listItem.isCompleted}
                  onChange={() => {
                    handleChange();
                  }}
                />
                <label>{listItem.form}</label>
                <button
                  className="destroy"
                  onClick={() => deleteButton(listItem)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
