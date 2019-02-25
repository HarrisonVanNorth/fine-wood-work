const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('images').then((results) => {
      res.json({ images: results });
    })
  }

}