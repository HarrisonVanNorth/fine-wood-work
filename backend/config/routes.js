const users = require("../controllers/users.js");
const images = require("../controllers/images.js")
const application = require("../controllers/application.js")
const aws = require("../controllers/aws.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function (app) {
//BEFORE AUTH
  //USERS
  app.get('/admin', users.index);
  app.put('/login', users.login);
  // app.post('/register', users.register);

  //IMAGES
  app.get('/images', images.all);

  //APPLICATION
  app.post('/application', application.new);

  //AUTH
  // app.use(jwtAuth);
  
  //APPLICATION
  app.get('/application', application.all);
  app.delete('/application/:id', application.delete);

  // //USERS after auth
  // app.put('/users/:id', users.update);

  // // UPLOAD after auth
  app.post('/upload', aws.upload);
  // app.delete('/delete/:key', aws.delete);

}

const jwtAuth = (req, res, next) => {
  const token = req.body.token || req.headers.token || req.query.token;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'You are not authorized, Please log in to continue.'
        });
      } else {
        delete decoded.password;
        req.decoded = decoded;
        next();
      }
    })
  } else {
    return res.status(401).send({
      message: 'You are not authorized, Please log in to continue.'
    });
  }
}