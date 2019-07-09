const os = require('os');

module.exports = {
  env: 'localhost',

  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'Veganism4Life!',
    database: 'development',
    host: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: 'letscook1@hotmail.com',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: true,

  clientUrl: 'https://woofpackfinalproject.herokuapp.com/',

  defaultUser: 'letscook1@hotmail.com',

  uploadDir: os.tmpdir(),

  authJwtSecret: '456kjalkjda',
};
