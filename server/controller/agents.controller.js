const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const Agent = require("../models/agent.model");

// @desc    Create new agent
// @route   POST /api/agent
// @access  Private
const createAgent = asyncHandler(async (req, res) => {
  const { type, name, email } = req.body;

  // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("Not Authorized");
//   }

  const agent = await Agent.create({
    type,
    name,
    email,
  });

  res.status(201).json(agent);
});


module.exports = {
    createAgent,
};
  
