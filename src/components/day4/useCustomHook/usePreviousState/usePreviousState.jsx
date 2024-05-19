import { useRef } from "react";

const usePreviousState = (state) => {
  const ref = useRef();

  if (state === ref.current) return state.slice(0, -1);

  const oldValue = ref.current;

  ref.current = state;

  return oldValue;
};

export default usePreviousState;
