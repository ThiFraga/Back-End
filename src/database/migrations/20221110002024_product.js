exports.up = function(knex) {
    return knex.schema.createTable("product", function(table) {
      table.increments("product_id");
      table.string("product_id").primary().notNullable();
      table.string("name").notNullable();
      table.string("price").notNullable();
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable("product");
  };
  