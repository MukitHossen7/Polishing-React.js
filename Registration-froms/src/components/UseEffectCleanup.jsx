import { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unSubscribe = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(unSubscribe);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-center">Set Auto Counter </h1>
      <p className="text-lg font-medium text-center">{count}</p>
    </div>
  );
};

export default UseEffectCleanup;
