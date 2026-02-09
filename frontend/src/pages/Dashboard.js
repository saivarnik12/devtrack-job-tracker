import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard({ user, setUser }) {
  const [apps, setApps] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");

  const logout = () => {
    localStorage.removeItem("profile");
    setUser(null);
  };

  const fetchApps = async () => {
    const res = await API.get("/api/applications");
    setApps(res.data);
  };

  const addApp = async () => {
    if (!company || !role) return;
    await API.post("/api/applications", { company, role, notes });
    setCompany("");
    setRole("");
    setNotes("");
    fetchApps();
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">DevTrack</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-8">

        {/* Add Application Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Job Application</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <input
              placeholder="Company"
              className="p-3 border rounded-lg"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              placeholder="Role"
              className="p-3 border rounded-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              placeholder="Notes"
              className="p-3 border rounded-lg"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button
              onClick={addApp}
              className="bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </div>

        {/* Applications Grid */}
        <h2 className="text-2xl font-bold mb-4">Your Applications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app._id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-purple-600">
                {app.company}
              </h3>
              <p className="text-gray-700">{app.role}</p>
              <p className="text-gray-500 mt-2">{app.notes}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
