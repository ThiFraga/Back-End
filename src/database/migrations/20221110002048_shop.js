exports.up = function(knex) {
    return knex.schema.createTable("shop", function(table) {
        table.string("user_id").notNullable();
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("user")
            .onDelete("cascade");

        table.string("product_id").notNullable();
        table
            .foreign("product_id")
            .references("product_id")
            .inTable("product")
            .onDelete("cascade");
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable("shop");
  };
  