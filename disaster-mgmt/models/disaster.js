const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema({
  type: { type: String, required: true },
  severity: { type: String, enum: ["low", "medium", "high"], required: true },
  location: { type: String, required: true },
  reportedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Disaster", disasterSchema);
