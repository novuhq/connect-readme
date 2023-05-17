require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  },
  test: {
    host: "127.0.0.1",
    dialect: 'mysql',
  },
  production: {
    host: "127.0.0.1",
    dialect: 'mysql',
  },
};
