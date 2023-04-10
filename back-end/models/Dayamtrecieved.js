const mongoose = require("mongoose");

const DayamtrecievedSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required: true,

        },
        date:{
            type: String,
            required: true,

        },
        amtrec:{
            type:String,
            required: true,

        },
        moneyrecfrom:{
            type:String,
            required: true,

        },
        reason:{
            type:String,
            required: true,

        },
        foliono:{
            type:Number,
            required: true,

        }
    }

)

const Dayamtrecieved = mongoose.model('Dayamtrecieved',DayamtrecievedSchema);

module.exports=Dayamtrecieved;