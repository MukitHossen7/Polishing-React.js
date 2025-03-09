import Home from "./components/Home";
import Login from "./components/Login";
import UseReducerCounter from "./components/UseReducerCounter";

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <Home></Home>
      <UseReducerCounter></UseReducerCounter>
      <Login></Login>
    </div>
  );
}

export default App;
