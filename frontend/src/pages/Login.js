import { useState } from "react";
import API from "../api/api";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", { email, password });
      localStorage.setItem("profile", JSON.stringify(res.data));
      setUser(res.data);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/20 p-10 rounded-2xl shadow-2xl w-96 text-white">
        
        <h1 className="text-3xl font-bold text-center mb-2">DevTrack</h1>
        <p className="text-center mb-6 text-white/80">
          Track your job applications like a pro
        </p>

        <form onSubmit={login} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-200 text-sm text-center">{error}</p>
          )}

          <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-purple-100 transition">
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-white/80">
          No account? Register via Postman 😉
        </p>

      </div>
    </div>
  );
}
