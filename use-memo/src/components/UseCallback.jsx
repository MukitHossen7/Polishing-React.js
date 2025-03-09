import { useState } from "react";
import Button from "./Button";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("This is Increment");
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    console.log("This is Decrement");
    setCount((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-20">
      <h3 className="text-lg font-extrabold">Count: {count}</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
