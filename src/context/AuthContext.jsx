import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (savedUser && token) {
      setUser(savedUser);
    }
    setLoading(false); // ✅ Finish loading when check is complete
  }, []);

  const login = async (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      const fakeToken = `fake-jwt-token-${email}`;
      const loggedInUser = { ...storedUser, token: fakeToken };

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("token", fakeToken);
      setUser(loggedInUser);
      navigate("/dashboard");
      return;
    }

    try {
      const res = await axios.post("https://reqres.in/api/login", { email, password });
      const token = res.data.token;
      const apiUser = { name: "API User", email, token };

      localStorage.setItem("user", JSON.stringify(apiUser));
      localStorage.setItem("token", token);
      setUser(apiUser);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials. Please sign up first.");
    }
  };

  const signup = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem(email, JSON.stringify(newUser));
    alert("Signup successful! You can now login.");
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>; // ✅ Prevent flash of login screen
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
