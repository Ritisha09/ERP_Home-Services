const mongoose = require('mongoose');

const empSchema = new mongoose.Schema(

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

const Employee = mongoose.model('employee', empSchema);
module.exports = Employee;