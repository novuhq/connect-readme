module.exports = {
  development: {
    url: "postgres://novo_cryptoalert_user:W547inxp3dNl8UDldHfIv5Vg5kZe99en@dpg-ch9o14l269v0obbp2ltg-a.oregon-postgres.render.com/novo_cryptoalert",
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
