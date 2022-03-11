const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide name"],
    },
    subject: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Already Exist"],
    },
    assigned: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
