const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    OrganizationName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Agent = mongoose.model("agent", agentSchema);

module.exports = Agent;
