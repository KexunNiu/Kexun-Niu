import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import HomeComponent from "./components/HomePage.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
