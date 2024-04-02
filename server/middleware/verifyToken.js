const jsonwebtoken = require("jsonwebtoken");
function verifyToken(req, res, next) {
  let token = req.headers.authorization.split(" ")[1];
  jsonwebtoken.verify(token, "saikey", (err, result) => {
    if (!err) {
      console.log(result);
      next();
    } else {
      res.status(404).send({ message: "Please login ..." });
    }
  });
}

module.exports = verifyToken;
