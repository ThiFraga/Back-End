const connection = require("../src/database/connection");

module.exports = {
    async create(shop) {
        const result = await connection("shop").insert(shop);
        return result;
    },

    async getProductsByUser(user_id){
        const result = await connection("shop")
                        .innerJoin("product","shop.product_id","product.product_id")
                        .where({"shop.user_id":user_id})
                        .select("*");
        return result;
    },

    async delete({ user_id, product_id}){
        const result = await connection("shop").where({ user_id, product_id}).delete();
        return result
    },
};