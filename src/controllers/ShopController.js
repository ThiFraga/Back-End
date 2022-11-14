const Shop = require("../models/Shop");

module.exports = {
    async create(request,response) {
        try {
            const newShop = request.body;
            const result = await Shop.create(newShop);
            
            return response.status(200).json(result);
        } catch (error) {
            console.warn("Shop creation failed:", erro);
            return response.status(500).json({notification: "Internal server error while trying to create Shop", });
        } 
    },
    async getProducts(request,response){
        try{
            const {user_id} = request.params;
            const result = await Shop.getProductsByUser(user_id);

            return response.status(200).json(result);

        }catch(err){
            console.log("Shop getById failed: " + err);
            return response.status(500).json({notification: "Internal server error while trying to get Shop", });
        }
    },

    async delete(request, response) {
        try {
            const {user_id, product_id } = request.params;
            const result = await Product.deleteById(user_id,product_id);
            
            return response.status(200).json(result);
        } catch (err) {
            console.log("Product delete failed: " + err);
            return response.status(500).json({notification: "Internal server error while trying to delete Product", });
        }
    },
};