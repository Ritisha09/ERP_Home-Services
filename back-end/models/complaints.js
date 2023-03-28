const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
    {
        complaint: {
            type: String,
            required: true,
        },
        serviceType: {
            type:String,
            required: true,
        },
        empId: {
            type:String,
            required: true,
        },
        custId: {
            type: String,
            required: false,
        },
        status:{
            type:String,
            required: true,
        },




    }
)

const complaint = mongoose.model('complaints', complaintSchema);

module.exports = User;
