const express = require('express');
const routes = express.Router();
const { login } = require('../../controllers/auth');
const usersController = require('../../controllers/users');
const authenticateToken = require('../../middleware/auth');

routes.post('/login', login)
routes.get('/:id', authenticateToken, usersController.userDetailByID)

routes.get('/detail/:id', usersController.userDetailByID)

module.exports = routes