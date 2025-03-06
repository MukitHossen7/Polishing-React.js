import { useEffect } from "react";
import { useState } from "react";

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
    <div>
      <h2 className="text-2xl font-bold text-center mt-20">
        Fetch Data Not Right Away
      </h2>
      {/* {apiData?.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default NotFetchData;
