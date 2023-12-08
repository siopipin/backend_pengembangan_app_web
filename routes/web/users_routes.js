
const express = require('express');
const routes = express.Router();
const connection = require('../../db')
const usersController = require('../../controllers/users')

routes.get('/', usersController.users)
routes.get('/detail', usersController.userDetailByID)

module.exports = routes;