const express = require('express');
const cors = require('cors');
const app = express();
const authFirebaseService = require('../auth/authFirebaseService');
const authMiddleware = require('../auth/authMiddleware');
const {
  init: databaseInit,
  middleware: databaseMiddleware,
} = require('../database/databaseInit');
const bodyParser = require('body-parser');

databaseInit().catch((error) => console.error(error));
authFirebaseService.init();

app.use(databaseMiddleware);
app.use(authMiddleware);
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const routes = express.Router();
require('./auditLog')(routes);
require('./auth')(routes);
require('./iam')(routes);
require('./settings')(routes);
require('./walk')(routes);
require('./pet')(routes);
app.use('/api', routes);

module.exports = app;
