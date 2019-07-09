module.exports = {
  env: 'development',

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
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: 'true',

  clientUrl: '<insert client url here>',

  defaultUser: '<insert your email here>',
};
