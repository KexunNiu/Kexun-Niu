import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import NavComponent from "./components/Nav.component";
import HomeComponent from "./components/HomePage.component";
import PostsComponent from "./components/Posts.component";
import PostsDetailComponent from "./components/PostsDetail.component";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="/posts/:id" element={<PostsDetailComponent />} />
        
      </Routes>
    </div>
  );
}

export default App;
