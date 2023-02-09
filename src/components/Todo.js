// Package
import React, { useState } from "react";

// Components
import Form from "./Form";
import List from "./List";
import Button from "./Button";
import Footer from "./Footer";

function Todo() {
  // States
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form list={list} setList={setList} />
        </header>

        <List list={list} setList={setList} status={status} />
        <Button list={list} setList={setList} setStatus={setStatus} />
      </section>

      <Footer />
    </div>
  );
}

export default Todo;
