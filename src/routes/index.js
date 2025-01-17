const express = require('express');
const routerUser = require('./user.router');
const router = express.Router();

//Rutas
router.use('/users', routerUser);

module.exports = router;
