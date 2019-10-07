
exports.up = function (knex, Promise) {
  return knex.schema.createTable("application", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("address");
    table.string("city");
    table.string("state");
    table.integer("zip_code");
    table.integer("phone_number");
    table.string("email");
    table.boolean("citizenship");
    table.string("resume_file");
    table.string("resume_key");
    table.timestamps(true, true);
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("application");

}

