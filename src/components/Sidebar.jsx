import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-black text-white min-h-screen p-6 relative">
      {/* Profile Section */}
      {user && (
        <div className="flex items-center space-x-3 relative">
          <div className="relative">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="rounded-full"
            />
            {/* Red notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              4
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold">{user.name || user.email.split("@")[0]}</h2>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="mt-6 space-y-2">
        {["Dashboard", "Expenses", "Wallets", "Summary", "Accounts", "Settings"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-all duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
