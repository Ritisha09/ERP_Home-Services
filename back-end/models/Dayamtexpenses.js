const mongoose = require('mongoose');

const DayamtexpensesSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        amtexp: {
            type: Number,
            required: true,
        },
        paidto: {
            type: String,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
        folionum: {
            type: Number,
            required: true,
        }

})
const DayamtExpenses = mongoose.model('Dayamtexpenses', DayamtexpensesSchema);

module.exports = DayamtExpenses;