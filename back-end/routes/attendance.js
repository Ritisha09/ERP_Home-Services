const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Attendance = require('../models/attendance');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


// Endpoint to add/update attendance data of all employees on a selected date
app.post('/add-update-attendance', async(req,res) =>{
    // const data ={};
    
    // Create an object containing the attendance data for each employee
    const { date, attendanceData } = req.body;

  try {
    const updatedAttendance = await Attendance.findOneAndUpdate(
      { date },
      { attendanceData },
      { upsert: true, new: true }
    );

    console.log(updatedAttendance);
    res.json(attendanceData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update attendance data' });
  }
});

app.get('/get-attendance/:selectedDate', async(req,res) =>{
    const date = req.params.selectedDate;
    console.log({date});
    let attendance = await Attendance.findOne({date});
    
    if(!attendance) {
        return res.json([{}]);
    }
    try{
        console.log(attendance.attendanceData);
        return res.json(attendance.attendanceData);
    }catch{
        return res.status(500).json({error: "Internal server Error"});
    }

})

module.exports = app;

