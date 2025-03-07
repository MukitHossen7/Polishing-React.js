// import Controlled from "./components/Controlled";
// import Uncontrolled from "./components/Uncontrolled";

import ChildA from "./components/ChildA";

// import UseRef from "./components/UseRef";

// import Counter from "./components/Counter";

// import UseEffectCleanup from "./components/UseEffectCleanup";

// import ContactFrom from "./components/ContactFrom";

// import RegistrationFromReact from "./components/RegistrationFromReact";

function App() {
  const data = "Mukit";
  return (
    <>
      {/* <Controlled></Controlled> */}
      {/* <Uncontrolled></Uncontrolled> */}
      {/* <RegistrationFromReact></RegistrationFromReact> */}
      {/* <ContactFrom></ContactFrom> */}
      {/* <UseEffectCleanup></UseEffectCleanup> */}
      {/* <Counter></Counter> */}
      {/* <UseRef></UseRef> */}
      <div>
        <h1 className="text-center mb-4 text-xl">This is Parent components</h1>
      </div>
      <ChildA data={data}></ChildA>
    </>
  );
}

export default App;
