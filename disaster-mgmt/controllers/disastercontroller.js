const Disaster = require("../models/disaster");

exports.createDisaster = async (req, res) => {
  try {
    const { type, severity, location } = req.body;
    const disaster = await Disaster.create({ type, severity, location });
    res.status(201).json(disaster);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

