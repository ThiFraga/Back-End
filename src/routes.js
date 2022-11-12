const express = require('express');
const routes = express.Router();

const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");

// Users 
routes.get("/users/:user_id", UserController.getById);
routes.post("/users", UserController.create);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete)

// Product 
routes.get("/product/:product_id", ProductController.getById);
routes.post("/product", ProductController.create);
routes.put("/product/:product_id", ProductController.update);
routes.delete("/product/:product_id", ProductController.delete)

module.exports = routes;