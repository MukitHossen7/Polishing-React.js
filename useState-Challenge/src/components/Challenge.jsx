import React, { useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count === 100) {
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="max-w-96 my-20 mx-auto bg-white shadow-md rounded-md px-5 pb-5">
      <h2 className="text-3xl font-semibold text-center py-3">
        useState Challenge
      </h2>
      <div>
        <p className="text-lg mb-2">
          Count:{" "}
          <span className="text-teal-500 text-xl font-medium">{count}</span>
        </p>
        <label className="text-lg">Step: </label>
        <input
          type="number"
          className="border-2 border-gray-800 rounded-md px-2"
        ></input>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleIncrement}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-3 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Challenge;
