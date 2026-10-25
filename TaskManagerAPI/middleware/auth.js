const jwt = require("jsonwebtoken");
function authenticate(req, res, next) {
 const authorization = req.headers.authorization;
 if (!authorization || !authorization.startsWith("Bearer ")) return res.status(401).json({message:"Authentication token is required"});
 try { req.user = jwt.verify(authorization.slice(7), process.env.JWT_SECRET); next(); }
 catch { return res.status(401).json({message:"Token is invalid or has expired"}); }
}
module.exports = authenticate;