const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('testimonials')
    .then(results => {
      res.json({ testimonials: results });
    })
  },

  add: (req, res) => {
    const {content, author} = req.body
    knex("testimonials")
    .insert({
      content,
      author,
      approved: false
    }, '*')
    .then(results => {
      console.log(results)
      res.json(results[0]);
    })
  },

  remove: (req, res) => {
    knex("testimonials")
    .where("testimonials.id", req.params.id)
    .del()
    .returning('*')
    .then(results => {
      console.log()
      res.json(results[0].id);
    })
  },

  update: (req, res) => {
    knex("testimonials").update({approved: true})
    .where("testimonials.id", req.params.id)
    .returning('*')
    .then(results => {
      res.json(results[0].id)
    })
  }
}