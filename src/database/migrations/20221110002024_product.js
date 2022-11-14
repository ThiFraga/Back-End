exports.up = function(knex) {
    return knex.schema.createTable("product", function(table) {
      table.increments("product_id").primary().notNullable();
      table.string("name").notNullable();
      table.string("price").notNullable();
      table.string("source").notNullable;
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable("product");
  };
  