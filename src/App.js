import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import NavComponent from "./components/Nav.component";
import HomeComponent from "./components/HomePage.component";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
