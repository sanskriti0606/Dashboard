import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, signup } = useContext(AuthContext);
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      signup(name, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-6 shadow-md rounded w-80" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">{isSignup ? "Signup" : "Login"}</h2>
        {isSignup && (
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-2" required />
        )}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-4" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">{isSignup ? "Signup" : "Login"}</button>
        <p className="text-sm text-center mt-2 cursor-pointer text-blue-600" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Login" : "New user? Sign up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
