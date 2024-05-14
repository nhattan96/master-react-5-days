import { useReducer } from "react";

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log(state, state);
      // if (action === "INCR") value += 1;
      // if (action === "DECR") value -= 1;
      // return value;

      // if (action === "INCR") state.value += 1;
      // if (action === "DECR") state.value -= 1;

      // if (action.type === "INCR") state.value += 1;
      // if (action.type === "DECR") state.value -= 1;

      if (action.type === "INCR") state.value += action.value;
      if (action.type === "DECR") state.value -= action.value;

      return { ...state };
      // return state DO NOT USE THIS
    },
    { value: 0 }
  );

  function incrValue() {
    // dispatch("INCR");

    // dispatch({type: "INCR"})

    dispatch({ type: "INCR", value: 10 });
  }
  function decrValue() {
    // dispatch("DECR");

    // dispatch({ type: "DECR" });

    dispatch({ type: "DECR", value: 10 });
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
