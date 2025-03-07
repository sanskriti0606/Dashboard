### Pokémon Dashboard UI
A Pokémon-themed dashboard built with React.js, featuring JWT authentication, API integration, and data visualization using Chart.js.

Live Demo
[Coming Soon]

### Features
✅ JWT Authentication (Login/Logout)
✅ Protected Routes (Only accessible after login)
✅ Pokémon Data Fetching (From PokeAPI)
✅ Dashboard UI with Stats & Charts
✅ Loading States
✅ Modern UI Design with Tailwind CSS

## Tech Stack
React.js (Frontend Framework)
React Router (Navigation & Protected Routes)
Axios (API Requests)
Tailwind CSS (Styling)
Chart.js (Data Visualization)
Reqres.in / MockAPI.io / JSONPlaceholder (Mock Authentication API)
PokeAPI (Pokémon Data)

Setup Instructions
1. Clone the Repository
bash
Copy
``git clone https://github.com/yourusername/pokemon-dashboard.git``
cd pokemon-dashboard
2. Install Dependencies
bash
Edit
npm install
3. Start the Development Server
bash
Edit
npm run dev
The app will be available at http://localhost:5173 (default Vite port).

## Authentication Flow
User logs in via Reqres.in / MockAPI.io / JSONPlaceholder
JWT token is stored securely in localStorage / sessionStorage
Dashboard is protected (Only accessible after login)
Logout clears JWT and redirects to login
## API Integration
Fetch Pokémon data from PokeAPI
Display Pokémon stats, experience, levels
Implement loading states

## Contributing
Fork the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m "Added new feature")
Push to GitHub (git push origin feature-name)
Create a Pull Request
## License
MIT License © 2025
