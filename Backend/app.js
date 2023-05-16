const express = require("express");
require("dotenv").config();
const { sequelize } = require("./src/sequelize/models");
const { User } = require("./src/sequelize/models");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDb = async () => {
  try {
    console.log("Connecting to database...");
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Default Route
app.get("/api/v1", (req, res) => {
  return res.json({
    status: true,
    message: "Hello World",
  });
});

app.post("/api/v1/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.create({ firstName, lastName, email, password });

  // Create a new user
  console.log(`${newUser.firstName} ID`, newUser.id);
  res.json({ message: "success", newUser });
});

// Catching all Undefined Routes
app.use("*", (req, res) => {
  return res.status(404).json({
    status: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Starting server
(async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
  });
})();
