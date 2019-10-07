
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('application').del()
    .then(function () {
      // Inserts seed entries
      return knex('application').insert([
        {
          first_name: "Average", 
          last_name: "Joe", 
          address: "8888 w name ln", 
          city: "Suprise", 
          state: "AZ", 
          zip_code: 85388, 
          phone_number: 888-888-888, 
          email: "averagejoe@gmail.com", 
          citizenship: true, 
          resume_file: "insert fill here for testing",
          resume_key: "insert name for testing"
        }
      ]);
    });
};
