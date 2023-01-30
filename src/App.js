// Package
import React from "react";

// Components
import Main from "./components/Main";
import Footer from "./components/Footer";
import FooterInfo from "./components/Footer-Info";

// CSS Files
import "./App.css";

function App() {
  return (
    <div className="App">
      <section class="todoapp">
        <Main />
        <Footer />
      </section>
      <FooterInfo />
    </div>
  );
}

export default App;
