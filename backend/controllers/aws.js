const knex = require('../db/knex.js')
const AWS = require('aws-sdk');
const fs = require("fs")
AWS.config.loadFromPath(__dirname+'/../aws_config.json');
AWS.config.update({region: "us-west-2"})
var s3Bucket = new AWS.S3({ params: { Bucket: "fine-wood-work-182749", ACL: 'public-read', apiVersion: '2006-03-01' } });
const baseAWSURL = "https://s3-us-west-2.amazonaws.com/fine-wood-work-182749/"

module.exports = {

  upload: (req, res)=> {
    // console.log(req)
    let uploadData = {
      Bucket: "fine-wood-work-182749",
      Key: req.files.data.name,
      Body: req.files.data.data,
      ContentType: req.files.data.mimetype  
    }
    s3Bucket.upload(uploadData, function (err, data) {
      if (err)  throw err
      console.log(`File uploaded successfully at ${data.Location}`)
    // }
      // knex('images').insert({
      //   img_url: baseAWSURL + uploadData.Key,
      //   category: req.body.category,
      //   key: "" + uploadData.Key
      // }, '*').then((results) => {
      //   res.json({ images: results[0] });
      // })
    });
  },

//   delete: (req, res)=> {
//     let fileName = {
//       Bucket: "fine-wood-work-182749",
//       Key: req.params.key
//     }
//     s3Bucket.deleteObject(fileName, function (err,data){
//       if (err) {
//         console.log(err);
//         return;
//       } 
//       knex('images').delete()
//       .where('images.key', req.params.key).returning('*')
//       .then((images) => {
//         res.json(images[0].id)
//       })
//     })
//   }
}