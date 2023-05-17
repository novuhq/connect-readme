const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateToken = async (payload, Secret = jwtSecret) => {
  const token = await jwt.sign(payload, Secret, {
    expiresIn: "4h",
  });
  return token;
};

const decodeToken = async (token) => {
  const payload = await jwt.verify(token, jwtSecret);
  return payload;
};

module.exports = {
    generateToken,
    decodeToken
}