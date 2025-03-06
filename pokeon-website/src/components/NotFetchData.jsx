import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const NotFetchData = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
      const data = await res.json();
      const pokemonData = data.results.map(async (currentData) => {
        const res = await fetch(currentData.url);
        const pokemon = await res.json();
        return pokemon;
      });
      console.log(pokemonData);
      const pokemon = await Promise.all(pokemonData);
      setApiData(pokemon);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(apiData);
  // if (!apiData) return <p>Loading...</p>;
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mt-20">
        Fetch Data Not Right Away
      </h2>
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
