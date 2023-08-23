require('dotenv').config()

const config = {
    url : "mongodb://127.0.0.1:27017/Northwind",
    secret: process.env.JWT_SECRET
}


module.exports = config