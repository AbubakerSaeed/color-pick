// IMPORTS
import React, { useState } from "react";

import "simplebar/dist/simplebar.min.css";
import "./App.css";

// COMPONENTS
import Header from "./components/Header";
import Tools from "./components/Tools";
import Canvas from "./components/Canvas";
import Info from "./components/Info";

// APP
function App() {
  // useState
  let [activeTool, setActiveTool] = useState("cursor");
  let [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1433259651738-0e74537aa8b5"
  );
  let [imageSource, setImageSource] = useState(
    "https://images.unsplash.com/photo-1541508186468-098826081946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
  );
  let [selectedColors, setSelectedColors] = useState([]);
  let [modalState, setModalState] = useState("hidden");

  return (
    <>
      <Header
        setImageUrl={setImageUrl}
        setImageSource={setImageSource}
        setSelectedColors={setSelectedColors}
        modalState={modalState}
        setModalState={setModalState}
      />
      <main>
        <Tools
          activeTool={activeTool}
          setActiveTool={setActiveTool}
          modalState={modalState}
          setModalState={setModalState}
        />
        <Canvas
          activeTool={activeTool}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          imageSource={imageSource}
          setImageSource={setImageSource}
        />
        <Info
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </main>
    </>
  );
}

// EXPORT
export default App;
