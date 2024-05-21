import { useState, createContext } from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import CounterClick from "./components/counter/counterClick";
import CounterInput from "./components/counter/counterInput";
import CounterDay3 from "./components/day3/counterDay3";
import UseAppReducerApp from "./components/day4/useReducer/useReducerApp";
import UseCustomHookApp from "./components/day4/useCustomHook/useCounterMax/useCounterMaxApp";
import UseForceUpdatedApp from "./components/day4/useCustomHook/useForceUpdated/useForceUpdatedApp";
import UsePreviousStateApp from "./components/day4/useCustomHook/usePreviousState/usePreviousStateApp";
import UseFetchApp from "./components/day4/useCustomHook/useFetch/useFetchApp";
import TaskList from "./components/ManagingTaskList/TaskListApp";

const TotalDay3Context = createContext();

function App() {
  const [total, setTotal] = useState(0);

  // Day 3
  const [totalDay3, setTotalDay3] = useState(0);

  //End Day 3

  return (
    <TotalDay3Context.Provider value={[totalDay3, setTotalDay3]}>
      <TaskList></TaskList>

      <div className="App">
        {/* Know how to use useEffect */}
        {/* <Counter init="0" end="5"></Counter> <br /> */}
        <br />
        {/* Know how to use useRef */}
        <CounterClick init="0" end="5"></CounterClick>
        <br />
        {/* Know how to pass param from child to parent */}
        {/* <CounterInput focus type="number" setTotal={setTotal}></CounterInput>
        <CounterInput type="number" setTotal={setTotal}></CounterInput>
        <CounterInput type="number" setTotal={setTotal}></CounterInput> */}
        <br />
        <b>Total : {total}</b>
        <br />
        <h1>Day 3</h1>
        {/* Know how to use useState, pass data from child to parent */}
        <b>Counter 1</b>
        <br />
        {/* <CounterDay3 id="1" setTotalDay3={setTotalDay3}></CounterDay3> */}
        <hr />
        <b>Counter 2</b>
        <br />
        {/* <CounterDay3 id="2" setTotalDay3={setTotalDay3}></CounterDay3> */}
        <br />
        <br />
        <b>Total value = {totalDay3}</b>
        <hr />
        <h2>useContext</h2>
        {/* Use createdContext and useContext to pass data to all child */}
        <b>Counter 3</b>
        <br />
        {/* <CounterDay3 id="1" setTotalDay3={setTotalDay3}></CounterDay3> */}
        <hr />
        <b>Counter 4</b>
        <br />
        {/* <CounterDay3 id="2" setTotalDay3={setTotalDay3}></CounterDay3> */}
        <br />
        <br />
        {/* <b>Total value = {totalDay3}</b> */}

        {/* Use useReducer */}
        <UseAppReducerApp></UseAppReducerApp>

        {/* Use customHook */}
        <UseCustomHookApp></UseCustomHookApp>

        <UseForceUpdatedApp></UseForceUpdatedApp>

        <UsePreviousStateApp></UsePreviousStateApp>

        <UseFetchApp></UseFetchApp>
      </div>
    </TotalDay3Context.Provider>
  );
}

// export default App;

// When use createContext
export { App, TotalDay3Context }; // <-- See next in index.js
