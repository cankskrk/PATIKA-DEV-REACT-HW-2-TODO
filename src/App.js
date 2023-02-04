// Package
import React from "react";

// Components
import Main from "./components/Main";
import FooterInfo from "./components/Footer-Info";

// CSS Files
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <Main />
      </section>
      <FooterInfo />
    </div>
  );
}

export default App;
