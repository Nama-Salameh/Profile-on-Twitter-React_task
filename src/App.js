import LeftSideBar from "./components/LeftSideBar/LeftSideBar.jsx";
import RightSideBar from "./components/RightSideBar/RightSideBar.jsx";
import "./App.css";
import MainBar from "./components/MainBar/MainBar.jsx";

function App() {
  return (
    <div className="App">
      <LeftSideBar />
        <MainBar />
        <RightSideBar />
    </div>
  );
}

export default App;
