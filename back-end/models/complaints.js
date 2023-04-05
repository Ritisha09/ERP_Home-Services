const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
    {
        compId: {
            type: String,
            required: true,
        },
        complaint: {
            type: String,
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
            type: Date,
            required: true,
        },
        dateClosing: {
            type: Date,
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
