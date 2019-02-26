const knex = require('../db/knex.js')
const AWS = require('aws-sdk');
const fs = require("fs")
AWS.config.loadFromPath(__dirname+'/../aws_config.json');
var s3Bucket = new AWS.S3({ params: { Bucket: "fine-wood-work-182749" } });
const baseAWSURL = "https://s3-us-west-2.amazonaws.com/fine-wood-work-182749/"

module.exports = {
  upload: (req, res)=> {
    console.log(req.files.file.name)
    let uploadData = {
      Key: req.files.file.name,
      Body: req.files.file.data,
      ContentType: req.files.file.mimetype,
      ACL: 'public-read'
    }
    s3Bucket.putObject(uploadData, function (err, data) {
      console.log("uploaded")
      if (err) {
        return res.json({alert: false})
      }
      knex('images').insert({
        img_url: baseAWSURL + uploadData.Key,
        category: req.body.category,
        key: "" + uploadData.Key
      }, '*').then((results) => {
        console.log(uploadData.key)
        res.json({ images: results[0], alert: true });
      })
    });
  },

  delete: (req, res)=> {
    let fileName = {
      Bucket: "fine-wood-work-182749",
      Key: req.params.key
    }
    s3Bucket.deleteObject(fileName, function (err,data){
      if (err) {
        console.log(err);
        return;
      } 
      knex('images').delete()
      .where('images.key', req.params.key).returning('*')
      .then((images) => {
        res.json(images[0].id)
      })
    })
  }

}