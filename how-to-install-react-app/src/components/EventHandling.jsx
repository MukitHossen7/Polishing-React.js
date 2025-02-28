import ChildEventHandling from "./ChildEventHandling";

const EventHandling = () => {
  const handleButtonClick = (user) => {
    alert(`Hello ${user}`);
  };
  const handleButtonClick2 = () => {
    alert("Hello User 2");
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <ChildEventHandling
        onClick={() => handleButtonClick("Mukit")}
        onClick2={handleButtonClick2}
      ></ChildEventHandling>
    </div>
  );
};

export default EventHandling;
