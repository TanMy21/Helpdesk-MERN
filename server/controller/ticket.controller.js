const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const Ticket = require("../models/ticket.model");

// // @desc    Get user tickets
// // @route   GET /api/tickets
// // @access  Private
const getTickets = asyncHandler(async (req, res) => {
  const {
    page,
    agentFilter,
    createdFilter,
    statusFilter,
    priorityFilter,
    typeFilter,
    resolutionFilter,
    sourceFilter,
  } = JSON.parse(req.query.ticketsFilterData);

  console.log(
    "Controller:- ",
    page,
    agentFilter,
    createdFilter,
    statusFilter,
    priorityFilter,
    typeFilter,
    resolutionFilter,
    sourceFilter
  );

  //pagination
  const PAGE_SIZE = 6;
  const PAGE = parseInt(page) || 0;
  const skip = PAGE_SIZE * PAGE;

  var pipeline = [
    {
      $addFields: {
        // put your query param here
        paramAssigned: agentFilter,
        paramType: typeFilter,
        paramSource: sourceFilter,
        paramStatus: statusFilter,
        paramPriority: priorityFilter,
      },
    },
    {
      $match: {
        $expr: {
          $and: [
            {
              user: req.user.id,
            },
            {
              $or: [
                {
                  $eq: ["$paramAssigned", "All"],
                },
                {
                  $eq: ["$paramAssigned", "$assigned"],
                },
              ],
            },
            {
              $or: [
                {
                  $eq: ["$paramType", "All"],
                },
                {
                  $eq: ["$paramType", "$type"],
                },
              ],
            },
            {
              $or: [
                {
                  $eq: ["$paramSource", "All"],
                },
                {
                  $eq: ["$paramSource", "$source"],
                },
              ],
            },
            {
              $or: [
                {
                  $eq: ["$paramStatus", "All"],
                },
                {
                  $eq: ["$paramStatus", "$status"],
                },
              ],
            },
            {
              $or: [
                {
                  $eq: ["$paramPriority", "All"],
                },
                {
                  $eq: ["$paramPriority", "$priority"],
                },
              ],
            },
          ],
        },
      },
    },
    {
      $setWindowFields: {
        output: {
          totalCount: {
            $count: {},
          },
        },
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: PAGE_SIZE,
    },
    {
      $project: {
        paramAssigned: false,
        paramPriority: false,
        paramSource: false,
        paramStatus: false,
        paramType: false,
      },
    },
  ];

  // const total = await Ticket.countDocuments({ user: req.user.id });
  // const aggregateQuery = await Ticket.aggregate([pipeline]);

  // console.log("aggregate query:- ", aggregateQuery);

  // const total = aggregateQuery.length;

  // console.log("Total:- ", total);

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // const Alltickets = await Ticket.find({ user: req.user.id })
  //   .limit(PAGE_SIZE)
  //   .skip(PAGE_SIZE * PAGE)
  //   .sort({ createdAt: -1 });

  const Alltickets = await Ticket.aggregate([pipeline])
  // .limit(PAGE_SIZE);
  // .skip(skip)
  // .sort({ createdAt: -1 });

  const total = Alltickets[0].totalCount;

  console.log("Total:- ", total);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  console.log("aggregate query:- ", Alltickets);

  console.log("Total:- ", total);

  console.log("Page Size:- ", skip);

  console.log("Page:-", PAGE);

  console.log("Total Pages:-", totalPages);

  res.status(200).json({ totalPages, Alltickets });
});

// --------------------------------------------------------------------------------

// // @desc    Get user tickets
// // @route   GET /api/tickets
// // @access  Private
// const getTickets = asyncHandler(async (req, res) => {
//   const { page } = JSON.parse(req.query.ticketsFilterData);

//   //pagination
//   const PAGE_SIZE = 6;
//   const PAGE = parseInt(page || "0");
//   const total = await Ticket.countDocuments({ user: req.user.id });

//   // Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   const Alltickets = await Ticket.find({ user: req.user.id })
//     .limit(PAGE_SIZE)
//     .skip(PAGE_SIZE * PAGE)
//     .sort({ createdAt: -1 });

//   const totalPages = Math.ceil(total / PAGE_SIZE);

//   console.log("All Tickets:- ", Alltickets);
//   console.log("Total:- ", total);
//   console.log("PAGE:- ", PAGE);
//   console.log("Page Size * PAGE:- ", PAGE_SIZE * PAGE);
//   console.log("Total Pages:- ", totalPages);

//   res.status(200).json({ totalPages, Alltickets });
// });

// ----------------------------------------------------------------------------------------------------

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

// @desc    Close ticket
// @route   PATCH /api/tickets/:id
// @access  Private
const closeTicket = asyncHandler(async (req, res) => {
  const { ticketIds } = req.body.data;

  Ticket.bulkWrite(
    ticketIds.map((id) => ({
      updateOne: {
        filter: { _id: id },
        update: { $set: { status: "Closed" } },
      },
    }))
  );

  res.status(200);
});

module.exports = {
  getTickets,
  getTicketsInfo,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
  closeTicket,
};
