import { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increaseCount = () => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  };
  return (
    <div>
      <div>
        <p>Re-render count: {renderCount}</p>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={() => setRenderCount(renderCount + 1)}>
          Re-render
        </button>
      </div>
    </div>
  );
};

export default Counter;
