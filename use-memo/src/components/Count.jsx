import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

const Count = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Components");
  return (
    <div className="flex flex-col justify-center items-center gap-3 pt-20">
      <h2 className="text-xl font-semibold text-center">Count: {count}</h2>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-blue-600 text-gray-100 rounded-md"
        >
          Increment
        </button>
      </div>
      <ChildComponent></ChildComponent>
    </div>
  );
};

export default Count;
