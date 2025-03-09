import React from "react";

const Button = ({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          children === "Increment" ? "bg-green-500" : "bg-red-500"
        } px-4 py-1 rounded-md text-gray-100`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
