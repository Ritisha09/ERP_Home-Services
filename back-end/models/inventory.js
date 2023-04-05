const mongoose = require('mongoose');

const inventSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true ,
        },
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
    }
)

const Inventory = mongoose.model('inventory', inventSchema);

module.exports = Inventory;