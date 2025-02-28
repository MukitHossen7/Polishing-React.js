/* eslint-disable react/prop-types */
const Input = ({ inputValue, setInputValue }) => {
  return (
    <div className="flex justify-center mt-10">
      <label>Text Here:</label>
      <input
        type="text"
        className="border-2 border-gray-800 rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
