const express = require("express");
const router = express.Router();
const {
  createAgent,
  getAgents,
  deleteAgent,
} = require("../controller/agents.controller");

const { protect } = require("../middleware/auth.middleware");

router.route("/").post(protect, createAgent).get(protect, getAgents);
router.route("/:id").delete(protect, deleteAgent);

module.exports = router;
