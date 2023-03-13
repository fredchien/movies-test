let jwt = require("jsonwebtoken");

let checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  token = cleanToken(token);
  if (token) {
    jwt.verify(token, 'df3e0c81d9ae15aedc95d22cb1aa937d', (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

let cleanToken = (token) => {
  if (String(token).startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  return token;
};

let decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = {
  checkToken: checkToken,
  cleanToken: cleanToken,
  decodeToken: decodeToken,
};
