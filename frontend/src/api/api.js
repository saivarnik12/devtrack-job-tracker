import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://devtrack-api-b2f8.onrender.com",
});

// Attach token to every request
API.interceptors.request.use((req) => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    const token = JSON.parse(profile).token;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }

  return req;
});

export default API;
