import React, { useState } from "react";

function Form({ list, setList }) {
  // State
  const [form, setForm] = useState("");

  // Functions
  const handleChange = (event) => {
    setForm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form === "") {
      return false;
    }

    setList([
      ...list,
      { id: Math.random(), form: form, isEditable: false, isCompleted: false },
    ]);

    setForm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          autoComplete="off"
          spellCheck="false"
          onChange={handleChange}
          value={form}
        />
      </form>
    </div>
  );
}

export default Form;
