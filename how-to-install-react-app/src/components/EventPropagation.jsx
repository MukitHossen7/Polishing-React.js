const EventPropagation = () => {
  const handleButton = (event) => {
    console.log("Button clicked");
    event.stopPropagation(); // stops propagation to parent element
  };
  const handleGrandChild = () => {
    console.log("Grandchild clicked");
  };
  const handleChild = () => {
    console.log("Child clicked");
  };
  const handleParent = () => {
    console.log("Parent clicked");
  };
  return (
    <>
      <div
        onClick={handleParent}
        className="flex flex-col items-center justify-center p-10"
      >
        <h1 className="text-3xl font-bold text-gray-800">Event Propagation</h1>
        <div onClick={handleChild}>
          <h1 className="text-3xl font-bold text-gray-800">
            Child Propagation
          </h1>
          <div onClick={handleGrandChild}>
            <h1 className="text-3xl font-bold text-gray-800">
              Grandchild Propagation
            </h1>
            <button
              onClick={(event) => handleButton(event)}
              className="bg-amber-400 px-3 py-1 rounded-2xl"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
