import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartSection from "../components/ChartSection";
import PokemonDetails from "../components/PokemonDetails";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axiosInstance.get("pokemon?limit=5");
        const formattedPokemon = res.data.results.map((p, index) => ({
          name: p.name,
          level: Math.floor(Math.random() * 100),
          time: "5:12 pm",
          description: "Battle Experience",
          color: ["blue", "purple", "orange", "red", "green"][index % 5],
        }));

        setPokemon(formattedPokemon);
        setPokemonDetails(
          formattedPokemon.map((p) => ({
            statName: p.name,
            value: Math.floor(Math.random() * 150),
          }))
        );
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    if (user) {
      fetchPokemon();
    }
  }, [user]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col p-6 bg-gray-50 h-full">
          <div className="flex gap-6">
            <ChartSection pokemon={pokemon} />
            <PokemonDetails pokemonDetails={pokemonDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
