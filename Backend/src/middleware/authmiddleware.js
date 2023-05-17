const {User} = require("../sequelize/models")
const {decodeToken} = require("../utils/jwt")


const authentication = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const verifiedToken = await decodeToken(token);

      req.user = await User.findByPk(verifiedToken.id);

      next();
    } catch (error) {
      res.status(401).send("Not authorized");
    }

    if (!token) {
      return res.status(400).send("No token");
    }
  }
};

module.exports = authentication;