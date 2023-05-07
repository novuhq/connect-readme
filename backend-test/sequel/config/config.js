module.exports = {
  development: {
    url: "postgres://connect_db_nu83_user:tM1RNTl0IcK6LSkdjBSx1skWb1J8dW1C@dpg-chbqdsbhp8u0162gsi40-a.oregon-postgres.render.com/connect_db_nu83",
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
