import useCounterMax from "./useCounterMax";

const CounterUseCustomHookApp = (props) => {
  const [value, incr, decr, error] = useCounterMax(props.max);

  const incrValue = () => {
    incr();
  };
  const decrValue = () => {
    decr();
  };

  return (
    <>
      <br />
      <button onClick={incrValue}>value + 1</button>
      &nbsp;&nbsp;
      <button onClick={decrValue}>value - 1</button>
      <br />
      value = {value}
      <br />
      <b>{error}</b>
    </>
  );
};
export default CounterUseCustomHookApp;
