const express = require("express");
const router = express.Router();
const { createAgent } = require("../controller/agents.controller");

const { protect } = require("../middleware/auth.middleware");

router.route("/").post(protect, createAgent);

module.exports = router;
