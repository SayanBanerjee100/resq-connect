const express = require("express");
const { createDisaster, getDisasters } = require("../controllers/disastercontroller");
const router = express.Router();

router.post("/", createDisaster);
router.get("/", getDisasters);

module.exports = router;
