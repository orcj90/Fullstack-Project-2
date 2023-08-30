const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    isAdmin: { type: Boolean, default: false, required: true }
})



module.exports = mongoose.model('User', userSchema)