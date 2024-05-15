import { useState } from "react";

const useForceUpdated = (max) => {
  const [value, setBoolean] = useState(true);

  const forceUpdate = () => {
    setBoolean(!value); // Invert the value of the reactive
  };
  return forceUpdate;
};

export default useForceUpdated;
