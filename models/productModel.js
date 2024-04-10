const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    images: {
        required: true,
        type: [String]
    }
})

module.exports = mongoose.model('product', schema)