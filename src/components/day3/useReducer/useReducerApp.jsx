import CounterUseReducer from "./counterUseReducer";

const UseAppReducerApp = () => {
  return (
    <>
      <h2> Use useReducer</h2>
      Counter#1 : <CounterUseReducer />
      <hr style={{ margin: "10px", height: "3px", backgroundColor: "gray" }} />
      Counter#2 : <CounterUseReducer />
    </>
  );
};

export default UseAppReducerApp;
