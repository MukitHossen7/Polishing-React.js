import { useState } from "react";

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-2 bg-blue-600 rounded-md text-gray-100"
      >
        Re-render Parent
      </button>
      <p className="text-lg font-medium">Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;
