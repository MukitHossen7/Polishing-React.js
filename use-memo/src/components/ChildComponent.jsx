import { useState } from "react";

const ChildComponent = () => {
  const [text, setText] = useState("");
  console.log("Child Component");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ChildComponent;
