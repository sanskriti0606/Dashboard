import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
