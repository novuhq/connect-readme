require("dotenv").config();
const url = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.PASSWORD);
module.exports = {
  development: {
    url,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: false,
      }
    },
  },
  test: {
    url: "localhost",
    dialect: "postgres",
  },
  production: {
    url: "localhost",
    dialect: "postgres",
  },
};
