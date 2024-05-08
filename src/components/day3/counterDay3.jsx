import { useContext, useState } from "react";
import { TotalDay3Context } from "../../App";

// import { useEffect } from "react";

const CounterDay3 = (props) => {
  const [count, setCount] = useState(0);

  //useContext
  const [totalDay3ctx, setTotalDay3ctx] = useContext(TotalDay3Context);

  const onClickIncr = () => {
    setCount((prev) => prev + 1);

    // Pass function
    // props.setTotalDay3((total) => total + 1);

    // Use useContext
    setTotalDay3ctx((total) => total + 1);
  };
  // useEffect(() => {
  //    setCount((count) => count + 1);

  //   return () => {

  //   };
  // }, []); // [] <-- Empty array mean call 1 time

  return (
    <>
      <button onClick={onClickIncr}>Value + 1</button>
      <br />
      <b>Value : {count}</b>
    </>
  );
};

export default CounterDay3;
