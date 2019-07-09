module.exports = {
  env: 'localhost',

  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'j5dnek7g7qrwAhbC',
    database: 'development',
    host: 'localhost',
    migrationHost: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: true,

  clientUrl: '<insert client url here>',

  defaultUser: '<insert your email here>',
};
