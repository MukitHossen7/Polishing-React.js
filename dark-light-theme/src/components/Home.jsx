import { use } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const Home = () => {
  const { handleToggleButton } = use(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-extrabold text-2xl">Hello Users</h1>
      <p className="text-lg font-medium">You use Dark and Light Mode</p>
      <button
        onClick={handleToggleButton}
        className="bg-blue-600 text-gray-100 px-3 py-1 rounded-md"
      >
        Dark
      </button>
    </div>
  );
};

export default Home;
