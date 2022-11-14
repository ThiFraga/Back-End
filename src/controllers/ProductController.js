const Product = require("../models/Product");

module.exports = {
    async create(request, response) {
        try {
            const newProduct = request.body;
            const result = await Product.create(newProduct);
            
            return response.status(200).json(result);
        } catch (error) {
            console.warn("Product creation failed:", erro);
            return response.status(500).json({notification: "Internal server error while trying to create Product", });
        }
    },

    async getById(request, response) {
        try {
            const { product_id } = request.params;
            const result = await Product.getById(product_id);
            
            return response.status(200).json(result);
        } catch (err) {
            console.log("Product getById failed: " + err);
            return response.status(500).json({notification: "Internal server error while trying to get Product", });
        }
    },

    async update(request, response) {
        try {
            const { product_id } = request.params;
            const product = request.body;
            const result = await Product.updateById(product_id, product);
            
            return response.status(200).json(result);
        } catch (err) {
            console.log("Product update failed: " + err);
            return response.status(500).json({notification: "Internal server error while trying to update Product", });
        }
    },

    async delete(request, response) {
        try {
            const { product_id } = request.params;
            const result = await Product.deleteById(product_id);
            
            return response.status(200).json(result);
        } catch (err) {
            console.log("Product delete failed: " + err);
            return response.status(500).json({notification: "Internal server error while trying to delete Product", });
        }
    },
};