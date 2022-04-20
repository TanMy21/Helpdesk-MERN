const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicketsInfo,
  getTicket,
  updateTicket,
  createTicket,
  deleteTicket,
  closeTicket,
} = require("../controller/ticket.controller");

const { protect } = require("../middleware/auth.middleware");

router.route("/").post(protect, createTicket).get(protect, getTickets);
router.route("/").patch(updateTicket);
router.route("/data").get(protect, getTicketsInfo);
router.route("/").delete(deleteTicket);
router.route("/close").patch(closeTicket);
// router.route("/").get(getTickets);

router.route("/:id").get(protect, getTicket).put(protect, updateTicket);

module.exports = router;
