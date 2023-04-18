const mongoose = require('mongoose');

const custSchema = new mongoose.Schema(
    {
        custId: {
            type: String,
            required: true ,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        streetaddress: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        zipCode: {
            type: Number,
            required: true,
        }
    }
)

const Customer = mongoose.model('customer', custSchema);

module.exports = Customer;