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
        amount:{
            type:String,
            required: true,

        },
        source_destination:{
            type:String,
            required: true,

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
