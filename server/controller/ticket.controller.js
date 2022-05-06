const asyncHandler = require("express-async-handler");
const moment = require("moment");
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

  var createdDate;

  if (createdFilter === "Any Time") {
    createdDate = "All";
  } else if (createdFilter === "Yesterday") {
    createdDate = moment().add(-1, "days");
  } else if (createdFilter === "Today") {
    createdDate = moment().add(-1, "days");
  } else if (createdFilter === "This Week") {
    createdDate = moment().add(-7, "days");
  } else if (createdFilter === "This Month") {
    createdDate = moment().add(-30, "days");
  } else {
    createdDate = moment().add(-365, "days");
  }

  console.log("Created Date:-  ", createdDate);

  //pagination
  const PAGE_SIZE = 6;
  const PAGE = parseInt(page) || 0;
  const skip = PAGE_SIZE * PAGE;

  console.log("User Id;-  ", req.user.id);

  const userData = await User.findById(req.user.id);

  var pipeline = [
    {
      $addFields: {
        // put your query param here
        paramAssigned: agentFilter,
        paramCreatedAt: createdDate,
        paramType: typeFilter,
        paramSource: sourceFilter,
        paramStatus: statusFilter,
        paramPriority: priorityFilter,
      },
    },
    {
      $match: {
        $and: [
          {
            user: userData._id,
          },
          // {
          //   $or: [
          //     {
          //       paramCreatedAt: {
          //         createdAt: "All"
          //       },
          //     },
          //     {
          //       $expr: {
          //         $eq: ["$paramCreatedAt", "$createdAt"],
          //       },
          //     },
          //   ],
          // },
          {
            $or: [
              {
                paramAssigned: {
                  $eq: "All",
                },
              },
              {
                $expr: {
                  $eq: ["$paramAssigned", "$assigned"],
                },
              },
            ],
          },
          {
            $or: [
              {
                paramType: {
                  $eq: "All",
                },
              },
              {
                $expr: {
                  $eq: ["$paramType", "$type"],
                },
              },
            ],
          },
          {
            $or: [
              {
                paramSource: {
                  $eq: "All",
                },
              },
              {
                $expr: {
                  $eq: ["$paramSource", "$source"],
                },
              },
            ],
          },
          {
            $or: [
              {
                paramStatus: {
                  $eq: "All",
                },
              },
              {
                $expr: {
                  $eq: ["$paramStatus", "$status"],
                },
              },
            ],
          },
          {
            $or: [
              {
                paramPriority: {
                  $eq: "All",
                },
              },
              {
                $expr: {
                  $eq: ["$paramPriority", "$priority"],
                },
              },
            ],
          },
        ],
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

  const Alltickets = await Ticket.aggregate([pipeline]);
  // .limit(PAGE_SIZE);
  // .skip(skip)
  // .sort({ createdAt: -1 });

  // console.log("aggregate query:- ", Alltickets);

  const total = Alltickets[0].totalCount;

  console.log("Total:- ", total);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  console.log("Page Size:- ", skip);

  console.log("Page:-", PAGE);

  console.log("Total Pages:-", totalPages);

  res.status(200).json({ totalPages, Alltickets });
});

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

  const ticketsDataPriority = await Ticket.aggregate([
    {
      $facet: {
        Low: [
          {
            $match: {
              user: user._id,
              priority: "Low",
            },
          },
        ],
        Medium: [
          {
            $match: {
              user: user._id,
              priority: "Medium",
            },
          },
        ],
        High: [
          {
            $match: {
              user: user._id,
              priority: "High",
            },
          },
        ],
        Urgent: [
          {
            $match: {
              user: user._id,
              priority: "Urgent",
            },
          },
        ],
      },
    },
    {
      $project: {
        Low: {
          $size: "$Low",
        },
        Medium: {
          $size: "$Medium",
        },
        High: {
          $size: "$High",
        },
        Urgent: {
          $size: "$Urgent",
        },
      },
    },
  ]);

  res
    .status(200)
    .json({ ticketsDataStatus, ticketsDataSource, ticketsDataPriority });
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
