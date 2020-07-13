const jwt = require('jsonwebtoken');
const config = require('config');

// this middleware makes the route that uses it protected
// next is a callback once it is done
module.exports = function (req, res, next) {
  // Get the token form the header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorisation denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};