import axios from "axios";

const API = axios.create({
  baseURL: "https://devtrack-api-b2f8.onrender.com/api",
});

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
