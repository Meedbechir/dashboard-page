import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
