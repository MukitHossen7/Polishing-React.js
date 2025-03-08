import { useHooks } from "../Hooks/useHooks";

const Home = () => {
  const { name, age } = useHooks();
  return (
    <>
      <h1 className="text-2xl font-extrabold text-center py-5">
        This is Home Component{" "}
      </h1>
      <p className="text-xl font-bold text-center">
        My name is {name}.My age is {age}
      </p>
    </>
  );
};

export default Home;
