import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState("On");
  const handleOnButton = () => {
    setToggle("Off");
  };
  const handleOffButton = () => {
    setToggle("On");
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
      <h1 className="font-semibold text-2xl">Toggle Button</h1>
      {toggle === "On" && (
        <button
          onClick={handleOnButton}
          className="border-2 border-teal-500 bg-green-500 text-gray-100 px-4 py-1 rounded-2xl cursor-pointer"
        >
          On
        </button>
      )}

      {toggle === "Off" && (
        <button
          onClick={handleOffButton}
          className="border-2 border-red-500 bg-red-500 text-gray-100 px-3 py-1 rounded-2xl cursor-pointer"
        >
          OFF
        </button>
      )}
    </div>
  );
};

export default Toggle;
