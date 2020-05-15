const ProductController = require('./product.controller');
const Router = require("express").Router();

Router.post('/add',ProductController.create);

module.exports = Router;