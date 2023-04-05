const mongoose = require('mongoose');

const inventSchema = new mongoose.Schema(
    {
        inventId: {
            type: String,
            required: true ,
        },
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Integer,
            required: false,
        },
        price: {
            type: Integer,
            required: true,
        },
    }
)

const Inventory = mongoose.model('inventory', inventSchema);

module.exports = Inventory;