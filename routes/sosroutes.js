const express = require("express");
const { createSOS, getSOS } = require("../controllers/soscontroller");
const router = express.Router();

router.post("/", createSOS);
router.get("/", getSOS);

module.exports = router;
