const { User } = require("../sequelize/models");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/jwt");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  //cheack if user already exist
  emailExist = await User.findOne({ where: { email } });
  if (emailExist) {
    return res.status(409).json({
      status: false,
      message: `Email ${email} already exist in the database....`,
    });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  delete newUser.dataValues.password;

  // Create a new user
  res.status(200).json({ message: "success", newUser });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  //cheack if user already exist
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({
      status: false,
      message: `Email ${email} does not exist in the database....`,
    });
  }

  const isPassword = await comparePassword(user.password, password);
  if (!isPassword) {
    return res.status(401).json({
      status: false,
      message: `Password is incorrect....`,
    });
  }

  const token = await generateToken({
    id: user.id,
    email: user.email,
  });

  delete user.dataValues.password;

  // Create a new user
  res.status(201).json({
    message: "user logged in successfully...",
    token,
  });
};

// get all users
const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({ message: "success", users });
};

module.exports = {
  createUser,
  loginUser,
};
