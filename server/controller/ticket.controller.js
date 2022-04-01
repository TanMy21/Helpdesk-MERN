const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const Ticket = require("../models/ticket.model");

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

// @desc    Get user ticket
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  res.status(200).json(ticket);
});

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    subject,
    type,
    source,
    status,
    priority,
    agent,
    description,
    tags,
  } = req.body;

  console.log("Endpoint Hit")


  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  console.log("user hit",user);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  console.log("name:-", name)
  console.log("email:-", email)
  console.log("phone:-", phone)
  console.log("subject:-", subject)
  console.log("type:-", type)
  console.log("source:-", source)
  console.log("status:-", status)
  console.log("priority:-", priority)
  console.log("assigned:-", agent)
  console.log("Description:-", description)
  console.log("tags:-", tags)




  const ticket = await Ticket.create({
    name,
    email,
    phone,
    subject,
    type,
    source,
    status,
    priority,
    agent,
    description,
    tags,
    user: req.user.id,
  });

  res.status(201).json(ticket);

  console.log("ticket hit",ticket);

});

// @desc    Delete ticket
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  await ticket.remove();

  res.status(200).json({ success: true });
});

// @desc    Update ticket
// @route   PUT /api/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
};
