const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, "id is required"]
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

module.exports = mongoose.model("Product", productSchema);


