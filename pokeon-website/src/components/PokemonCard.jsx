const PokemonCard = ({ data }) => {
  return (
    <div className="bg-gray-100 shadow-2xl rounded-xl flex flex-col items-center py-10 gap-3">
      <div className="">
        <img
          src={data.sprites.other.dream_world.front_default}
          className="w-full h-20 object-cover"
          alt={data.name}
        />
      </div>
      <h2 className="text-lg font-semibold">{data.name}</h2>
      <p>Type: {data.types[0].type.name}</p>
      <p>Height: {data.height} decimeters</p>
      <p>Weight: {data.weight} hectograms</p>
    </div>
  );
};

export default PokemonCard;
