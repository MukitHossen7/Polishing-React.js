import { useState } from "react";
import Display from "./Display";
import Input from "./Input";

const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Input inputValue={inputValue} setInputValue={setInputValue}></Input>
      <Display inputValue={inputValue}></Display>
    </div>
  );
};

export default LiftingStateUp;
