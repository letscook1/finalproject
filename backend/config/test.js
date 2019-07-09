module.exports = {
  env: 'test',

  database: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    operatorsAliases: false,
  },

  email: {
    auth: {
      user: 'mock',
    },
  },

  graphiql: false,

  clientUrl: '<insert client url here>',

  defaultUser: '<insert your email here>',
};
