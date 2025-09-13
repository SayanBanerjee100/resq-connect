const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["citizen", "volunteer", "admin"], default: "citizen" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
