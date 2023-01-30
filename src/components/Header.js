import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>todos</h1>
      <form>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </div>
  );
}

export default Header;
