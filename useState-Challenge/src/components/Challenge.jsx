import React from "react";

const Challenge = () => {
  return (
    <div className="max-w-96 my-20 mx-auto bg-white shadow-md rounded-md px-5 pb-5">
      <h2 className="text-3xl font-semibold text-center py-3">
        useState Challenge
      </h2>
      <div>
        <p className="text-lg mb-2">
          Count: <span className="text-teal-500 text-xl font-medium">0</span>
        </p>
        <label className="text-lg">Step: </label>
        <input
          type="number"
          className="border-2 border-gray-800 rounded-md px-2"
        ></input>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-3 rounded-md">
          Increment
        </button>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-md">
          Decrement
        </button>
        <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-md">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Challenge;
