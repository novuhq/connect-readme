const express = require("express");

const authrouter = express.Router();

const { createUser, loginUser, getAllUsers } = require("./auth.controller");



authrouter.post("/create-user", createUser);
authrouter.post("/login", loginUser);

module.exports = authrouter;
