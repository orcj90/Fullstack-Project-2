const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    modelname: String,
    brandname: String,
    description: String,
    color: String,
    inventory: String,
    reviews: String,
    star: String,
    title: String,
    img: String,
    newPrice: Number,
    prevPrice: String
})

module.exports = mongoose.model("product", ProductSchema);


