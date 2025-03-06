import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate
  const [name, setName] = useState(""); // Added name input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    signup(name, email, password);
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 shadow-md rounded w-80">
        <h2 className="text-xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-4"
            required
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
