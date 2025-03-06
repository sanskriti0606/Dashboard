import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center rounded-md">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button 
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
