const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
};
const generateJWTToken = ({ id, displayName, email }) => 
    jwt.sign({ id, displayName, email }, TOKEN_SECRET, jwtConfig);

module.exports = { generateJWTToken };