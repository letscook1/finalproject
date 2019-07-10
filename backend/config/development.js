module.exports = {
  env: 'development',

  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'j5dnek7g7qrwAhbC',
    database: 'development',
    host:
    '146.148.32.151' ,
    migrationHost: '146.148.32.151',
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

  graphiql: 'true',

  clientUrl: '<insert client url here>',

  defaultUser: 'letscook1@hotmail.com',
};
