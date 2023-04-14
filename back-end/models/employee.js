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
        dateJoining:{
            type: String,
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
            type: String,
            required: true,
        },
        email: {
            type:String,
            required: true,
        },
        aadharNo: {
            type: Number,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        accountNo: {
            type:String,
            required:true,
        },
        accountholderName: {
            type: String,
            required: true,
        },
        IFSCcode: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },

    }
)
const Employee = mongoose.model('employee', empSchema);
module.exports = Employee;