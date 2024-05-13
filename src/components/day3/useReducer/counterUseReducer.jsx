import { useReducer } from "react";

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log(state,state)
      // if (action === "INCR") value += 1;
      // if (action === "DECR") value -= 1;
      // return value;

      if (action === "INCR") state.value += 1;
      if (action === "DECR") state.value -= 1;
      // return { ...state };
      return state
    },
    { value: 0 }
  );

  function incrValue() {
    dispatch("INCR");
  }
  function decrValue() {
    dispatch("DECR");
  }

  return (
    <>
      <br />
      <button onClick={incrValue}>value + 1</button>
      &nbsp;&nbsp;
      <button onClick={decrValue}>value - 1</button>
      <br />
      {/* value = {value}; */}
      value = {state.value};
    </>
  );
};
export default CounterUseReducer;
