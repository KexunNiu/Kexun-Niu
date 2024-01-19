import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import NavComponent from "./components/Nav.component";
import HomeComponent from "./components/HomePage.component";
import PostPageComponent from "./components/PostPage.component";
import GalleryPageComponent from "./components/GalleryPage.component";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/posts" element={<PostPageComponent />} />
        <Route path="/gallery" element={<GalleryPageComponent />} />
        
      </Routes>
    </div>
  );
}

export default App;
