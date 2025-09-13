const SOS = require("../models/sos");

exports.createSOS = async (req, res) => {
  try {
    const { userId, description, location } = req.body;
    const sos = await SOS.create({ userId, description, location });
    res.status(201).json(sos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSOS = async (req, res) => {
  try {
    const sosList = await SOS.find().populate("userId", "name email");
    res.json(sosList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
