import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import HomeComponent from "./components/HomePage.component";
import PostsDetailComponent from "./components/PostsDetail.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/posts/:slug" element={<PostsDetailComponent />} />
        
      </Routes>
    </div>
  );
}

export default App;
