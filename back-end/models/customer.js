const mongoose = require('mongoose');

const custSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true ,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    }
)

const Customer = mongoose.model('customer', custSchema);

module.exports = Customer;