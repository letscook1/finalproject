module.exports = {
  env: 'production',

  database: {
    username: 'root',
    dialect: 'mysql',
    password: 'j5dnek7g7qrwAhbC',
    database: 'development',
    host:
      '/cloudsql/woofpack:us-central1:woof-pack-dog-walking-app',
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

  graphiql: false,

  clientUrl: '<insert client url here>',

  defaultUser: null,
};
