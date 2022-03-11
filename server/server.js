//----------- Imports ------------
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const ConnectDB = require("./config/ConnectDB");
const userRoutes = require("./routes/user.routes");
const { errorHandler } = require("./middleware/error.middleware");
//env
dotenv.config();

//--------- Middleware
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//------ DB
// *************** connect db ******************
ConnectDB();

//--- routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.use("/api/", userRoutes);
// app.use("/api/tickets", goalsRoutes);

app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
