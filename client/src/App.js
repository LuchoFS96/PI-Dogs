import "./App.css";
import Dogs from "./components/dogs";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Dogs />
    </div>
  );
}

export default App;
