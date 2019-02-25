exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", (table) => {
  table.increments();
  table.text("img_url");
  table.string("category")
  table.string("key")
  table.timestamps(true, true);
  });
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("images");
};
