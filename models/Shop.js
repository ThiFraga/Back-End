const connection = require("../database/connection");

modele.exports = {
    async create(product) {
        const result = await connection("product").insert(product);
        return result;
    },

    async getById({ user_id, product_id}) {
        const result = await connection("product").where({user_id, product_id}).select("*").first();
        return result;
    },
};