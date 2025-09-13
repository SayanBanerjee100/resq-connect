const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ["pending", "resolved"], default: "pending" },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("SOS", sosSchema);
