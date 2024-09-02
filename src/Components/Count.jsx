import React from "react";
import { useStore } from "../stores/appStore";
import { shallow } from "zustand/shallow";

const Count = () => {
  // const count = useStore((state)=>state.count)
  // const increaseCount = useStore((state)=>state.increaseCount)
  // const decreaseCount = useStore((state)=>state.decreaseCount)

  //using array
  const [count, increaseCount, decreaseCount] = useStore((state) => {
    console.log("render count");
    return [state.count, state.increaseCount, state.decreaseCount];
  }, shallow);
  console.log("count");

  return (
    <div className="w-[300px] m-auto">
      <h1>count</h1>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
};

export default Count;
