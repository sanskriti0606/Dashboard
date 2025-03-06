const PokemonDetails = ({ pokemonDetails }) => {
  return (
    <div className="w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Pokémon Details</h2>

      {pokemonDetails.map((p, i) => (
        <div key={i} className="mb-4">
          <div className="flex justify-between">
            <span className="font-medium">{p.statName}</span>
            <span>{p.value}</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${p.value / 1.5}%` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Extra Section (Similar to "Save More Money") */}
      <div className="bg-white p-4 mt-6 rounded shadow-md text-center">
        <h3 className="text-md font-semibold">Train your Pokémon</h3>
        <p className="text-gray-500 text-sm">Manage experience points wisely.</p>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded">VIEW TIPS</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
