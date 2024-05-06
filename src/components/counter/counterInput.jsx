import { useState, useEffect, useRef } from "react";

const CounterInput = (props) => {
  const [value, setValue] = useState("");

  // use Ref
  const refCounter = useRef();

  const onChangeCounter = (event) => {
    const newValue = parseInt(event.target.value || 0);
    setValue((prev) => newValue);

    props.setTotal((total) => total - value); // Subtract old value
    props.setTotal((total) => total + newValue); // Add new value
  };

  useEffect(() => {
    if (props.focus) {
      refCounter.current.focus();
    }

    return () => {};
  }, [props.focus]);

  return (
    <>
      <br />
      Counter:
      <input type={props.type} onChange={onChangeCounter} ref={refCounter} />
      <br />
      Input Value: {value}
    </>
  );
};

export default CounterInput;
