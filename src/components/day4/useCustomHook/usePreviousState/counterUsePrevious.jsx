import { useState } from "react";
import usePreviousState from "./usePreviousState";
import useForceUpdated from "../useForceUpdated/useForceUpdated";

function CounterUsePreviousState() {
  const [value, setValue] = useState("");

  const forceUpdate = useForceUpdated();

  const [a, setA] = useState("");

  const previousValue = usePreviousState(value);

  const test = usePreviousState(a);

  const change = (event) => {
    setValue(event.target.value);
  };

  const testChange = (event) => {
    setA(event.target.value);
  };

  const keyDown = (event) => {
    if (event.key === "Backspace" || event.key === "Delete") forceUpdate();
  };

  return (
    <>
      <b>Current Value </b>
      <input onChange={change} onKeyDown={keyDown} type="text"></input>
      <input onChange={testChange} type="text"></input>
      <br />
      <b>
        Previous Value : <u> {previousValue}</u>
      </b>
      <br />
      {test}
    </>
  );
}
export default CounterUsePreviousState;
