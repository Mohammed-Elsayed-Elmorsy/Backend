const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: Number
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product