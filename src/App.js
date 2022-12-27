import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import MainPage from "./components/MainPage/MainPage";
import MessagePage from "./components/MessagePage/MessagePage";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <MainPage />
      <GalleryPage />
      <MessagePage />
    </div>
  );
}

export default App;
