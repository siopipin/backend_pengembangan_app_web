const express = require('express');
const routes = express.Router();
const usersRoutes = require('./web/users_routes')
const booksRoutes = require('./web/books_routes')

routes.use('/users', usersRoutes);
routes.use('/books', booksRoutes);

module.exports = routes;