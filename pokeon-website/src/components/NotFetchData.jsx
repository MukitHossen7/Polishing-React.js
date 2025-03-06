import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const NotFetchData = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=80");
      const data = await res.json();
      const pokemonData = data.results.map(async (currentData) => {
        const res = await fetch(currentData.url);
        const pokemon = await res.json();
        return pokemon;
      });
      const pokemon = await Promise.all(pokemonData);
      setApiData(pokemon);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(apiData);
  // const handleSearchTermChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const searchValue = apiData.filter((currentValue) =>
  //   currentValue.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleSearchForm = (e) => {
    e.preventDefault();
    const searchValue = apiData.filter((currentValue) =>
      currentValue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setApiData(searchValue);
  };
  if (loading)
    return (
      <p className="text-3xl font-bold text-center min-h-screen">Loading...</p>
    );
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mt-20">
        Fetch Data Not Right Away
      </h2>
      <form
        onSubmit={handleSearchForm}
        className="flex items-center justify-center mt-8"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon"
          className="w-96 px-4 py-2 rounded-lg shadow-sm focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {apiData?.map((data) => (
          <div key={data.id}>
            <PokemonCard data={data}></PokemonCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFetchData;
