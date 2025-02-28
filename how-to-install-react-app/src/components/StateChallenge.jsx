import { useState } from "react";

const StateChallenge = () => {
  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    {
      name: "Bob",
      age: 30,
    },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center text-2xl font-bold">Users Lists:</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {user.map((data, idx) => (
          <div
            className="border border-amber-400 p-4 rounded-xl max-w-sm"
            key={idx}
          >
            <h3>{data.name}</h3>
            <p>{data.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateChallenge;
