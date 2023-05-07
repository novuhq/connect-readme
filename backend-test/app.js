const express = require("express");
const { sequelize } = require("./sequel/models");
const { User } = require("./sequel/models");

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDB = async () => {
  console.log("Attempting to connect here.....");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

(async () => {
  await connectDB();

  console.log("Test mic 1 2 3.....");

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();

app.post("/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({ firstName, lastName, email });

  // Create a new user
  console.log(`${newUser.firstName} ID`, newUser.id);
  res.json({ message: "success", newUser });
});

app.get("/users", async (req, res) => {
  // Get all users
  const users = await User.findAll();
  res.json({ message: "success", users });
});
