import { useState } from "react";

const useCounterMax = (max) => {
  const [value, setValue] = useState(0);

  const incr = () => {
    if (value < max) setValue(value + 1);
  };

  const decr = () => {
    setValue(value - 1);
  };

  var error = "";
  if (value >= max)
    error = `Message: the maximum (${max}) is
  reached`;
  return [value, incr, decr, error];
};

export default useCounterMax;
