const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

// rutas
app.use('/api/v1', router);

app.get('/', (req, res) => {
	return res.send('Welcome to express!');
});

app.use(errorHandler);

module.exports = app;
