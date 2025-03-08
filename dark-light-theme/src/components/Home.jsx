import { use } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const Home = () => {
  const { theme, handleToggleButton } = use(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 bg-white dark:bg-gray-800">
      <h1 className="font-extrabold text-2xl dark:text-gray-100">
        Hello Users
      </h1>
      <p className="text-lg font-medium dark:text-gray-100">
        You use Dark and Light Mode
      </p>
      <button
        onClick={handleToggleButton}
        className="bg-blue-600 text-gray-100 px-3 py-1 rounded-md"
      >
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Home;
