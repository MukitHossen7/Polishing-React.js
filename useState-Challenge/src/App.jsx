import About from "./components/About";
// import Challenge from "./components/Challenge";
import Home from "./components/Home";
import { Provider } from "./provider/Provider";

function App() {
  return (
    <>
      {/* <Challenge></Challenge> */}
      <Provider>
        <Home></Home>
        <About></About>
      </Provider>
    </>
  );
}

export default App;
