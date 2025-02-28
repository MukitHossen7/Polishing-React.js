import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Hooks;
