
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'harrison',
          password: "$2a$10$hMHOqFBEfSrqeRVqn5APheWPkce4n86BakvPnXmmPb2jHhkXsLDMO"
        }
      ]);
    });
};
