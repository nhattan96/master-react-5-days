import { useContext, useRef, useState } from "react";
import { TotalDay3Context } from "../../App";

import { useEffect } from "react";

const CounterDay3 = (props) => {
  const [count, setCount] = useState(0);

  // useRef
  const countRef = useRef(0);

  //useContext
  const [totalDay3ctx, setTotalDay3ctx] = useContext(TotalDay3Context);

  const onClickIncr = () => {
    setCount((prev) => prev + 1);

    // Pass function
    // props.setTotalDay3((total) => total + 1);

    // Use useContext
    setTotalDay3ctx((total) => total + 1);
  };

  const onClickIncrRef = () => {
    countRef.current += 1;
  };
  // useEffect(() => {
  //    setCount((count) => count + 1);

  //   return () => {

  //   };
  // }, []); // [] <-- Empty array mean call 1 time

  useEffect(() => {
    console.log(`-Without dependency ${countRef.current}`);
    return () => {
      console.log(`-Without dependency ${countRef.current} - clean`);
    };
  });

  useEffect(() => {
    console.log(`--With [] dependency ${countRef.current}`);
    return () => {
      console.log(`--With [] dependency ${countRef.current} - clean`);
    };
  }, []);

  useEffect(() => {
    console.log(`---With dependency ${countRef.current}`);
    return () => {
      console.log(`---With dependency ${countRef.current} - clean`);
    };
  }, [countRef.current]);

  return (
    <>
      <button onClick={onClickIncr}>Value + 1</button>
      <br />
      <b>Value : {count}</b>
      <br />
      <br />
      <b>Use useRef</b>
      <button onClick={onClickIncrRef}>Ref + 1</button>
      <br />
      <b>Ref value : {countRef.current}</b>
    </>
  );
};

export default CounterDay3;
