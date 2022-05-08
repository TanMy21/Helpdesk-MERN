const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    subject: {
      type: String,
    },
    type: {
      type: String,
    },
    source: {
      type: String,
    },
    status: {
      type: String,
    },
    priority: {
      type: String,
    },
    assigned: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    OrganizationName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
