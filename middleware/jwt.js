const jwt = require('jsonwebtoken')
const config = require('../config/db')

const verifyToken = (req, res, next) => {

    let token = req.headers['authorization'] ? req.headers['authorization'].split("Bearer ")[1] : null;

    if (!token) {
        return res.status(403).json({
            message: "No token provided!"
        })
    }

    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Unauthorized" })
        }

        req.user = user
        next()
        return;

    })




}

module.exports = verifyToken