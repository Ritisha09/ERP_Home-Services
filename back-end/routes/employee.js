const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


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

  app.get('/get-employee' , async (req,res) => {
    // getting variables from frontend

    let employee = await Employee.find();

    if(employee===null){
        return res.status(400).json({error: "Employee is Empty"});
    }
    try{
        res.json(employee);
        // res.status(201).json({message: "Inventory displayed!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});


// to get technicians data
app.get('/get-employee_technician' , async (req,res) => {
  // getting variables from frontend

  const designation = "technician";
  let employee = await Employee.find({designation});

  if(employee===null){
      return res.status(400).json({error: "Employee as Techician is Empty"});
  }
  try{
      res.json(employee);
      // res.status(201).json({message: "Inventory displayed!!"});
  }catch(error){
      console.error(error);
      res.status(500).json({error: "Internal server error"});
  }
});
  

module.exports = app;