// import jsonwebtoken
import jwt from "jsonwebtoken";

// import auth config
import configAuth from "../config/auth.js"

const auth = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      jwt.verify(bearerToken, configAuth.jwtKey, (err, data) =>{
          if(err) {
              res.sendStatus(403)
          } else {
              //console.log(data);
              next()
          }
      })

    } else {
        res.sendStatus(401)
    }
};

export default auth;
