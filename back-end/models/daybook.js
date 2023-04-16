const mongoose = require("mongoose");

const daybookSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required: true,
        },
        action: {
            type:String,
            required: true,
        },
        date:{
            type: String,
            required: true,

        },
        accountNo:{
            type: Number,
            required: false,
        },
        amount:{
            type:String,
            required: true,

        },
        recipient_payer:{
            type:String,
            required: true,

        },
        referenceNo:{
            type: String,
            required: false,
        },
        reason:{
            type:String,
            required: true,
        },
        folionum:{
            type:Number,
            required: true,

        }
    }

)

const Daybook = mongoose.model('daybook', daybookSchema);

module.exports= Daybook;
