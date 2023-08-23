const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    address: String
})



module.exports = mongoose.model('user', UserSchema)