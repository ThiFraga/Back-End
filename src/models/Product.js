const connection = require("../database/connection");

module.exports = {
    async create(product) {
        const result = await connection("product").insert(product);
        return result; 
    },

    async getById(product_id){
        const result = await connection("product").where({product_id}).select("*").first();
        return result;
    },

    async updateById(product_id, product) {
        const result = await connection("product").where({product_id}).update(product);
        return result;
    },

    async deleteById(product_id) {
        const result = await connection("product").where({product_id}).delete();
        return result;
    },
};