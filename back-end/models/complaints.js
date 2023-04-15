const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
    {
        compId: {
            type: String,
            required: true,
        },
        // complaint: {
        //     type: String,
        //     required: true,
        // },
        phone: {
            type: Number,
            required: true,
        },
        serviceType: {
            type: String,
            required: true,
        },
        empId: {
            type: String,
            required: true,
        },
        custId: {
            type: String,
            required: true,    
        },
        status: {
            type: String,
            required: true,
        },
        dateOpening: {
            type: String,
            required: true,
        },
        dateClosing: {
            type: String,
            required: false,
        },
        bill: {
            type: String,
            required: false,
        }
    }
)

const Complaint = mongoose.model('complaints', complaintSchema);

module.exports = Complaint;
