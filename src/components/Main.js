import React, { useState } from "react";

function Main({ allList, activeList, completedList }) {
  return (
    <div className="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        {allList.map((item, index) => (
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>{item}</label>
              <button class="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
