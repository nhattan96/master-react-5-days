import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import CounterClick from "./components/counter/counterClick";
import CounterInput from "./components/counter/counterInput";
import CounterDay3 from "./components/day3/counterDay3";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      {/* Know how to use useEffect */}
      <Counter init="0" end="5"></Counter> <br />
      <br />
      {/* Know how to use useRef */}
      <CounterClick init="0" end="5"></CounterClick>
      <br />
      {/* Know how to pass param from child to parent */}
      <CounterInput focus type="number" setTotal={setTotal}></CounterInput>
      <CounterInput type="number" setTotal={setTotal}></CounterInput>
      <CounterInput type="number" setTotal={setTotal}></CounterInput>
      <br />
      <b>Total : {total}</b>
      <br />
      <h1>Day 3</h1>
      {/* Know how to use useState */}
      <b>Counter 1</b>
      <CounterDay3></CounterDay3>
      <hr />
      <b>Counter 2</b>
      <CounterDay3></CounterDay3>
    </div>
  );
}

export default App;
