// import EventHandling from "./components/EventHandling";
import EventPropagation from "./components/EventPropagation";
import Hooks from "./components/Hooks";
import StateChallenge from "./components/StateChallenge";
// import ProfileCard from "./components/ProfileCard/ProfileCard";
// import RepitComponent from "./components/RepitComponents/RepitComponent";

function App() {
  // const name = "Raju";
  return (
    <>
      {/* <RepitComponent name={name}></RepitComponent>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming,Cooking</p>
        <button className="border border-teal-500 px-3 py-1 rounded-md">
          Contact
        </button>
      </ProfileCard>
      <EventHandling></EventHandling> */}
      <EventPropagation></EventPropagation>
      <Hooks></Hooks>
      <StateChallenge></StateChallenge>
    </>
  );
}

export default App;
