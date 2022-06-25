const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenValidation = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    request.user = payload;

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;