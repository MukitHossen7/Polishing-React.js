/* eslint-disable no-constant-binary-expression */
const ShortCircuit = () => {
  //   const result = false || "Hello";
  //   const result2 = true || "Hello";

  //   console.log(result);
  //   console.log(result2);
  const result = true && "Hello";
  const result2 = false && "Hello";

  console.log(result);
  console.log(result2);
  return (
    <div>
      <h1>ShortCircuit</h1>
    </div>
  );
};

export default ShortCircuit;
