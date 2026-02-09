require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

// ✅ Allow Netlify frontend to call backend
app.use(
  cors({
    origin: "https://69897fb0c288e6af30b51e00--lucky-malabi-856fb0.netlify.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
