import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartSection = ({ pokemon }) => {
  const chartData = {
    labels: pokemon.map((p) => p.name),
    datasets: [
      {
        label: "Pokémon Levels",
        data: pokemon.map((p) => p.level),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Pokémon Stats</h2>
        <p className="text-gray-500 text-sm">01 - 25 March, 2025</p>
      </div>

      {/* 🔹 Chart (Reduced Size) */}
      <div className="h-[120px]">
        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* 🔹 Pokémon Transaction List */}
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Today</h2>
        {pokemon.map((p, i) => (
          <div key={i} className="flex justify-between items-center p-2 border-b">
            <div className="flex items-center">
              {/* Colored Circle */}
              <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-${p.color}-500 text-white text-sm font-bold mr-2`}>
                {p.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-md font-medium">{p.name}</p>
                <p className="text-gray-500 text-xs">{p.time} · {p.description}</p>
              </div>
            </div>
            <p className="text-md font-bold">Lv. {p.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartSection;
