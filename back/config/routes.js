const users = require("../controllers/users.js");
const images = require("../controllers/images.js")
const testimonials = require("../controllers/testimonials.js")
// const aws = require("../controllers/aws.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function (app) {

  //USERS
  app.get('/admin', users.index);
  app.post('/login', users.login);
  app.post('/register', users.register);

  //TESTIMONIALS befor auth
  app.get('/testimonials', testimonials.all);
  app.post('/testimonials', testimonials.add);

  // // // AUTH
  // app.use(jwtAuth);
  
  //IMAGES after auth
  app.get('/images', images.all);

  //USERS after auth
  app.put('/users/:id', users.update);

  //UPLOAD after auth
  // app.post('/upload', aws.upload);
  // app.delete('/delete/:key', aws.delete);

  //TESTIMONIALS after auth
  app.put('/testimonials/:id', testimonials.update);
  app.delete('/testimonials/:id', testimonials.remove);

}

// const jwtAuth = (req, res, next) => {
//   const token = req.body.token || req.headers.token || req.query.token;
//   if (token) {
//     jwt.verify(token, secret, (err, decoded) => {
//       if (err) {
//         return res.status(401).send({
//           message: 'You are not authorized, Please log in to continue.'
//         });
//       } else {
//         delete decoded.password;
//         req.decoded = decoded;
//         next();
//       }
//     })
//   } else {
//     return res.status(401).send({
//       message: 'You are not authorized, Please log in to continue.'
//     });
//   }
// }