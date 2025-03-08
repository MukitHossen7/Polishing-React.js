import { useReducer } from "react";

const UseReducerCounter = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      if (state <= 0) {
        return 0;
      }
      return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-20">
      <h3 className="dark:text-gray-100 text-lg font-medium">Count: {count}</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-blue-600 text-gray-100 px-3 py-1 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-blue-600 text-gray-100 px-3 py-1 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerCounter;
