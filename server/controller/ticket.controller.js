const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const Ticket = require("../models/ticket.model");

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  //pagination
  const PAGE_SIZE = 3;
  const PAGE = parseInt(req.query.page || "0");
  const total = await Ticket.countDocuments({ user: req.user.id });

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const Alltickets = await Ticket.find({ user: req.user.id })
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * PAGE)
    .sort({ createdAt: -1 });

  const totalPages = Math.ceil(total / PAGE_SIZE);

  res.status(200).json({ totalPages, Alltickets });
});

// @desc    Get tickets info
// @route   GET /api/tickets/data
// @access  Private
const getTicketsInfo = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  const ticketsDataStatus = await Ticket.aggregate([
    {
      $facet: {
        Open: [
          {
            $match: {
              user: user._id,
              status: "Open",
            },
          },
        ],
        Pending: [
          {
            $match: {
              user: user._id,
              status: "Pending",
            },
          },
        ],
        Resolved: [
          {
            $match: {
              user: user._id,
              status: "Resolved",
            },
          },
        ],
        Closed: [
          {
            $match: {
              user: user._id,
              status: "Closed",
            },
          },
        ],
      },
    },
    {
      $project: {
        Open: {
          $size: "$Open",
        },
        Pending: {
          $size: "$Pending",
        },
        Resolved: {
          $size: "$Resolved",
        },
        Closed: {
          $size: "$Closed",
        },
      },
    },
  ]);

  const ticketsDataSource = await Ticket.aggregate([
    {
      $facet: {
        Phone: [
          {
            $match: {
              user: user._id,
              source: "Phone",
            },
          },
        ],
        Forum: [
          {
            $match: {
              user: user._id,
              source: "Forum",
            },
          },
        ],
        Email: [
          {
            $match: {
              user: user._id,
              source: "Email",
            },
          },
        ],
        SocialMedia: [
          {
            $match: {
              user: user._id,
              source: "Social Media",
            },
          },
        ],
      },
    },
    {
      $project: {
        Phone: {
          $size: "$Phone",
        },
        Forum: {
          $size: "$Forum",
        },
        Email: {
          $size: "$Email",
        },
        SocialMedia: {
          $size: "$SocialMedia",
        },
      },
    },
  ]);

  res.status(200).json({ ticketsDataStatus, ticketsDataSource });
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

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

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
});

// @desc    Delete ticket
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  // const user = await User.findById(req.user.id);

  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // const ticket = await Ticket.findById(req.params.id);

  // if (!ticket) {
  //   res.status(404);
  //   throw new Error("Ticket not found");
  // }

  // if (ticket.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("Not Authorized");
  // }

  const { ticketDelete } = req.body;

  var query = { _id: { $in: ticketDelete } };

  const response = await Ticket.deleteMany(query);

  return response.data;

  // await ticket.remove();

  // res.status(200).json({ success: true });
});

// @desc    Update ticket
// @route   PUT /api/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  // const user = await User.findById(req.user.id);

  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  const { ticketId, type, status, priority, agent } = req.body;

  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  // if (ticket.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("Not Authorized");
  // }

  const updatedTicket = await Ticket.findOneAndUpdate(
    { _id: ticketId },
    {
      $set: {
        type: type,
        status: status,
        priority: priority,
        assigned: agent,
      },
    }
  );

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  getTicketsInfo,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
};
