const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('application')
    .then(results => {
      res.json({ application: results });
    })
  },

  delete: (req, res) => {
    knex("application")
    .del()
    .where("id", req.params.id)
    .then( ()=>{
      knex("application")
      .returning("*")
      .then(results => res.json({application: results, message:'Application deleted'})
      )
    })
  },

  new: (req, res) => {
    knex("application").insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      phone_number: req.body.phone_number,
      email: req.body.email,
      citizenship: req.body.citizenship,
      resume_file: req.body.resume_file,
      resume_key: req.body.resume_key,   
    })
    .then(() => {
      res.json({message: "Application submited"})
    })
  }
}