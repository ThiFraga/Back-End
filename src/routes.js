const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const ProductController = require("./controllers/ProductController");
const ProductValidator = require("./validators/ProductValidator");

const ShopController = require('./controllers/ShopController');
const ShopValidator = require("./validators/ShopValidator");

// Users 
routes.get("/users/:user_id",UserValidator.getById, UserController.getById);
routes.post("/users", UserValidator.create, UserController.create);
routes.put("/users/:user_id", UserValidator.update, UserController.update);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete)

// Product 
routes.get("/product/:product_id", ProductValidator.getById, ProductController.getById);
routes.post("/product", ProductValidator.create, ProductController.create);
routes.put("/product/:product_id", ProductValidator.update, ProductController.update);
routes.delete("/product/:product_id", ProductValidator.delete, ProductController.delete);

//Shop
routes.post("/shop", ShopValidator.create, ShopController.create);
routes.get("/shop/:user_id",ShopValidator.getProducts, ShopController.getProducts);
routes.delete("/shop/:user_id/:product_id",ShopValidator.getProducts, ShopController.getProducts);


module.exports = routes;