import React from "react";
import { Header } from "./components/organisms/header";
import { Main } from "./components/organisms/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="col-12 flex items-center justify-between"></Header>
      <Main></Main>
    </div>
  );
}

export default App;
