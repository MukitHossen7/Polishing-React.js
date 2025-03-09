import { useMemo } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculation sum....");
    let i;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }

    return i;
  };

  let total = useMemo(() => {
    return sum();
  }, []);
  //   let total = sum();
  console.log("Hello");
  return (
    <div>
      <p className="text-lg font-bold ">Sum :{total}</p>
    </div>
  );
};

export default ExpensiveComponent;
