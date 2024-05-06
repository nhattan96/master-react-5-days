import "./App.css";
import Counter from "./components/counter/counter";

function App() {
  return (
    <div className="App">
      <Counter init="0" end="5"></Counter> <br />
    </div>
  );
}

export default App;
