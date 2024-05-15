import CounterUseCustomHookApp from "./counterUseCounterMax";

const UseCustomHookApp = () => {
  return (
    <>
      <h2> Use useCustomHook useCounterMax</h2>
      Counter#1 : <CounterUseCustomHookApp max={5} />
      <hr style={{ margin: "10px", height: "3px", backgroundColor: "gray" }} />
      Counter#2 : <CounterUseCustomHookApp max={10} />
    </>
  );
};
export default UseCustomHookApp;
