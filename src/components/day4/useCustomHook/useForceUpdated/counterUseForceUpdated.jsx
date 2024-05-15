import { useState, useRef } from "react";

function CounterForceUpdated() {
  const [value, setValue] = useState(0);

  const valueRef = useRef(0);

  function incrValue() {
    setValue(value + 1);
  }

  function incrRef() {
    valueRef.current += 1;
  }
  return (
    <>
      <button onClick={incrValue}>value + 1</button>
      value = {value};<button onClick={incrRef}>ref + 1</button>
      ref = {valueRef.current};
    </>
  );
}
export default CounterForceUpdated;
