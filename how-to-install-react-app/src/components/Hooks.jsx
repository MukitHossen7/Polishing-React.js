import { useState } from "react";
import SubHooks from "./SubHooks";

const Hooks = () => {
  const [count, setCount] = useState(0);
  console.log("This is Hook");
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <SubHooks></SubHooks>
    </div>
  );
};

export default Hooks;
