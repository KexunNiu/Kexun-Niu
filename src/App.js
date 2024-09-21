import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import HomeComponent from "./components/HomePage.component";
import PostsDetailComponent from "./components/PostsDetail.component";
import LoadPage from "./components/LoadPage.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadPage />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/posts/:slug" element={<PostsDetailComponent />} />
        
      </Routes>
    </div>
  );
}

export default App;
