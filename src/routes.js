const express = require('express');
const routes = express.Router();

const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const ShopController = require('../controllers/ShopController');

// Users 
routes.get("/users/:user_id", UserController.getById);
routes.post("/users", UserController.create);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete)

// Product 
routes.get("/product/:product_id", ProductController.getById);
routes.post("/product", ProductController.create);
routes.put("/product/:product_id", ProductController.update);
routes.delete("/product/:product_id", ProductController.delete);

//Shop
routes.post("/shop", ShopController.create);
routes.get("/shop/:user_id",ShopController.getProducts);
routes.delete("/shop/:user_id/:product_id",ShopController.getProducts);


module.exports = routes;