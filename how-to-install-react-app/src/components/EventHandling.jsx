const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    alert("Button Clicked");
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <button
        className="bg-teal-400 px-3 py-1 rounded-md"
        onClick={(event) => handleButtonClick(event)}
      >
        OnClick
      </button>
    </div>
  );
};

export default EventHandling;
