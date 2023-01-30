// Package
import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FooterInfo from "./components/Footer-Info";

// CSS Files
import "./App.css";

function App() {
  const [allList, setAllList] = useState(["Learn React"]);
  const [activeList, setActiveList] = useState(["Learn React"]);
  const [completedList, setCompletedList] = useState(["Learn React"]);

  return (
    <div className="App">
      <section class="todoapp">
        <Header />
        <Main
          allList={allList}
          activeList={activeList}
          completedList={completedList}
        />
        <Footer />
      </section>
      <FooterInfo />
    </div>
  );
}

export default App;
