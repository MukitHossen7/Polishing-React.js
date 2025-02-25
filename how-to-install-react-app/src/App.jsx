import ProfileCard from "./components/ProfileCard/ProfileCard";
import RepitComponent from "./components/RepitComponents/RepitComponent";

function App() {
  const name = "Raju";
  return (
    <>
      <RepitComponent name={name}></RepitComponent>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default App;
