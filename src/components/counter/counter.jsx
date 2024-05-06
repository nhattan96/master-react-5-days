import { useEffect, useState } from "react";

const Counter = (props) => {
  let init = parseInt(props.init || 0);
  let end = parseInt(props.end || 0);

  const [count, setCount] = useState(init);

  useEffect(() => {
    if (end && count >= end) return;

    let timer = setInterval(() => {
      setCount((prev) => prev + 1);

      console.log("count =", count);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const restart = () => {
    setCount((prev) => init);
  };

  return (
    <>
      Initital valaue of the counter is: {init}
      <br />
      The counter is set to: {count}
      <br />
      {end && count >= end ? (
        <>
          <b>Counter stopped</b>
          <br />
          <button onClick={restart}>Start</button>
        </>
      ) : (
        <i>Counter in progress</i>
      )}
    </>
  );
};

export default Counter;
