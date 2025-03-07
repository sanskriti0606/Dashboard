import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-black text-white min-h-screen p-6 relative">
      {/* Trainer Profile Section */}
      {user && (
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Trainer Avatar"
              className="rounded-full w-16 h-16 border-2 border-gray-700"
            />
            {/* PokéBall Notification Badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              4
            </span>
          </div>
          <h2 className="text-lg font-bold mt-3">{user.name || "Pokémon Trainer"}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
      )}

      {/* Static Features List */}
      <div className="space-y-3 mt-6">
        <p className="text-gray-400 hover:text-white cursor-pointer">📖 Pokedex</p>
        <p className="text-white font-bold">📊 Pokémon Stats</p> {/* Active Feature */}
        <p className="text-gray-400 hover:text-white cursor-pointer">⚔️ Battles</p>
        <p className="text-gray-400 hover:text-white cursor-pointer">🎒 Items</p>
        <p className="text-gray-400 hover:text-white cursor-pointer">⚙️ Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
