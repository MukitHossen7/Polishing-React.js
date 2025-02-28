/* eslint-disable react/prop-types */
const ChildEventHandling = ({ onClick, onClick2 }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-lg font-semibold bg-amber-300 px-3 py-1 rounded-2xl"
      >
        Click Me
      </button>
      <button
        onClick={onClick2}
        className="text-lg font-semibold bg-red-600 px-3 py-1 rounded-2xl"
      >
        Click Me 2
      </button>
    </div>
  );
};

export default ChildEventHandling;
