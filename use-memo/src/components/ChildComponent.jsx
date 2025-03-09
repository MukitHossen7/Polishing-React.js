// import { memo, useState } from "react";

// const ChildComponent = () => {
//   const [text, setText] = useState("");
//   console.log("Child Component");
//   return (
//     <div className="flex flex-col justify-center items-center mt-10">
//       <input
//         type="text"
//         value={text}
//         className="border-2 border-red-600"
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// };

// export default memo(ChildComponent);

import { memo, useState } from "react";

export const ChildComponent = memo(() => {
  const [text, setText] = useState("");
  console.log("Child Component");
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <input
        type="text"
        value={text}
        className="border-2 border-red-600"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
});
