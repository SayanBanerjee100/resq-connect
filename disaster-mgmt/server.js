// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Disaster Management Backend is running ✅");
});

app.use("/api/users", require("./routes/userroutes"));
app.use("/api/disasters", require("./routes/disasterroutes"));
app.use("/api/sos", require("./routes/sosroutes"));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
