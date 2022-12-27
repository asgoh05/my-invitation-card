import "./App.css";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import MainPage from "./components/MainPage/MainPage";
import MessagePage from "./components/MessagePage/MessagePage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <GalleryPage />
      <MessagePage />
    </div>
  );
}

export default App;
