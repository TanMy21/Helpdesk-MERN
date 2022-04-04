const express = require("express");
const router = express.Router();
const { createAgent, getAgents } = require("../controller/agents.controller");

const { protect } = require("../middleware/auth.middleware");

router.route("/").post(protect, createAgent).get(protect, getAgents);

module.exports = router;
