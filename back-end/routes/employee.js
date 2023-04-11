const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// // route to add in front end to call this API
// app.post('/add-employee' , async(req,res) => {
//     // getting variables from frontend
//     const {id, name, phone, streetAddress, email, area, zipCode, aadharNo, bankName, accountNo, accountholderName, IFSCcode, designation} = req.body;

//     let employee = await Employee.findOne({name});
//     if(employee){
//         return res.status(400).json({error: "Employee already exists."});
//     }

//     employee = Employee({id, name, phone, streetAddress, email, area, zipCode, aadharNo, bankName, accountNo, accountholderName, IFSCcode, designation});

//     try{
//         await employee.save();
//         res.status(201).json({message: "Employee added successfully!!"});
//     }catch(error){
//         console.error(error);
//         res.status(500).json({error: "Internal server error"});
//     }
// });

// route to add in front end to call this API
app.post('/add-employee' , async (req, res) => {
    try {
      // getting variables from frontend
      const { id, name, phone, streetaddress, email, area, zipCode, aadharNo, bankName, accountNo, accountholderName, IFSCcode, designation } = req.body;
  
      // Check if employee with the same ID already exists
      const existingEmployee = await Employee.findOne({ name, phone });
      if (existingEmployee) {
        return res.status(400).json({ error: "Employee with this ID already exists." });
      }
  
      // create new employee object
      const newEmployee = new Employee({
        id,
        name,
        phone,
        streetaddress,
        email,
        area,
        zipCode,
        aadharNo,
        bankName,
        accountNo,
        accountholderName,
        IFSCcode,
        designation,
      });
  
      // save employee object to the database
      await newEmployee.save();
  
      res.status(201).json({ message: "Employee added successfully!!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

module.exports = app;