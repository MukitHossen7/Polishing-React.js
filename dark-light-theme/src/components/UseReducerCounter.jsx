import { useReducer } from "react";

const UseReducerCounter = () => {
  let initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    console.log(state);
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
      if (state.count <= 0) {
        return { count: 0 };
      }
      return { count: state.count - 1 };
    }
    if (action.type === "RESET") {
      return { count: (state.count = 0) };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.count);
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-20">
      <h3 className="dark:text-gray-100 text-lg font-medium">
        Count: {state.count}
      </h3>
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
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-blue-600 text-gray-100 px-3 py-1 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerCounter;
