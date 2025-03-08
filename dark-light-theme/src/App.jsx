import Home from "./components/Home";
import UseReducerCounter from "./components/UseReducerCounter";

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <Home></Home>
      <UseReducerCounter></UseReducerCounter>
    </div>
  );
}

export default App;
