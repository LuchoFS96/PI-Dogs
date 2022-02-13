import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dogs from "./components/dogs";
import Home from "./components/home";
import LandingPage from "./components/landingPage";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
