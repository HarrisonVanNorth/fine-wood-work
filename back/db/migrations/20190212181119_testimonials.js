exports.up = function(knex, Promise) {
  return knex.schema.createTable("testimonials", (table) => {
    table.increments();
    table.string("author");
    table.text("content");
    table.boolean("approved")
    table.timestamps(true, true);
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("testimonials");

}
