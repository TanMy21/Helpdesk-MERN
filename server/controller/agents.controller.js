const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Agent = require("../models/agent.model");

// @desc    Create new agent
// @route   POST /api/agent
// @access  Private
const createAgent = asyncHandler(async (req, res) => {
  // Destructure request body object
  const { type, name, email, password } = req.body;

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  // Get token from header
  token = req.headers.authorization.split(" ")[1];

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Get organization name.
  const admin = await User.findById(decoded.id).select("organizationName");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   if (!user) {
  //     res.status(401);
  //     throw new Error("Not Authorized");
  //   }

  const agent = await Agent.create({
    type,
    name,
    email,
    password: hashedPassword,
    OrganizationName: admin.organizationName,
  });

  res.status(201).json(agent);
});

// @desc    Get Agents
// @route   GET /api/tickets
// @access  Private
const getAgents = asyncHandler(async (req, res) => {
  // Get token from header
  token = req.headers.authorization.split(" ")[1];

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Get organization name.
  const admin = await User.findById(decoded.id).select("organizationName");

  const AllAgents = await Agent.find({
    OrganizationName: admin.organizationName,
  });

  res.status(200).json(AllAgents);
});

// @desc    Delete Agent
// @route   DELETE /api/agent
// @access  Private
const deleteAgent = asyncHandler(async (req, res) => {
  // Destructure request body object

  console.log("Delete Agent:- ", req.params.id);

  const response = await Agent.deleteOne({ _id: req.params.id });

  return response.data;
});

module.exports = {
  createAgent,
  getAgents,
  deleteAgent,
};
