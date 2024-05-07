import { useState, useEffect } from "react";

const CounterDay3 = () => {
  const [count, setCount] = useState(0);

  const onClickIncr = () => setCount((prev) => prev + 1);

  useEffect(() => {

    return () => {
    setCount((count) => count + 1);

    };
  }, []);

  return (
    <>
      <button onClick={() => onClickIncr}>Value + 1</button>
      <br />
      <b>Value : {count}</b>
    </>
  );
};

export default CounterDay3;
