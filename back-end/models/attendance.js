const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({

  date: {
    type: String,
    required: true,
    unique: true
  },
  attendanceData: {
    // type: Map,
    // of: {
    //   present: {
    //     type: Boolean,
    //     required: true
    //   },
    //   absent: {
    //     type: Boolean,
    //     required: true
    //   }
    // },
    // type: [
    //     {
    //       employeeId: {
    //         type: String,
    //         required: true
    //       },
    //       present: {
    //         type: Boolean,
    //         required: true
    //       },
    //       absent: {
    //         type: Boolean,
    //         required: true
    //       }
    //     }
    //   ],
    type: Array,
    required: true,
    default: []
  }
});

// attendanceSchema.set('toJSON', {
//     transform: function (doc, ret) {
//       ret.data = ret.data.map(item => {
//         return {
//           employeeId: item.employeeId,
//           present: item.present,
//           absent: item.absent
//         }
//       })
//     }
//   });
  
const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;