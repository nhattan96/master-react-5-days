import CounterForceUpdated from "./counterUseForceUpdated";
import useForceUpdated from "./useForceUpdated";

const UseForceUpdatedApp = () => {
  const forceUpdate = useForceUpdated()

  const refresh = () => forceUpdate()
  return (
    <>
      <h2> Use useCustomHook useForceUpdated</h2>
      Counter#1 : <CounterForceUpdated />
      <hr style={{ margin: "10px", height: "3px", backgroundColor: "gray" }} />
      Counter#2 : <CounterForceUpdated />
      <br /> <br />
      <button onClick={refresh}>Refresh</button>
    </>
  );
};
export default UseForceUpdatedApp;
