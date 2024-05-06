import { useState } from "react";

const CounterClick = (props) => {
  let init = parseInt(props.init || 0);
  let end = parseInt(props.end || 0);

  const [count, setCount] = useState(init);

  const incr = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      Initital valaue of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is: {count}
      <br />
      {count < end ? (
        <>
          <i>Counter in progress</i>{" "}
          <br />
          <button onClick={incr}>Count + 1</button>
        </>
      ) : (
        <><b>Counter stopped</b></>
      )}
    </>
  );
};

export default CounterClick;
