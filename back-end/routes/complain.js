const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Complaint = require('../models/complaints');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-complain' , async(req,res) => {
    // getting variables from frontend
    const {custId, compId, serviceType, empId, status, dateOpening, dateClosing} = req.body;

    // let customer = await Customer.findOne({name,phone});
    // if(customer){
    //     return res.status(400).json({error: "Customer already exists."});
    // }

    let complain = Complaint({custId, compId, serviceType, empId, status, dateOpening, dateClosing});

    try{
        await complain.save();
        res.status(201).json({message: "Customer added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-complain' , async (req,res) => {
    // getting variables from frontend

    let complain = await Complaint.find();

    if(complain===null){
        return res.status(400).json({error: "Employee is Empty"});
    }
    try{
        res.json(complain);
        // res.status(201).json({message: "Inventory displayed!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post('/update-complain', async (req, res) => {
    const empId = req.query.empId;
    const {empName,phone,dateJoining,streetaddress, email, area, zipCode, aadharNo, bankName, accountNo, accountholderName, IFSCcode, designation} = req.body;
  
  try {
    // Check if item exists in inventory
    const employee = await Employee.findOne({_id: empId});
    console.log(employee);
  
    if (!employee) {
      return res.status(404).json({error: 'Employee not found'});
    }
    employee.name = empName;
    employee.phone = phone;
    employee.dateJoining = dateJoining;
    employee.streetaddress = streetaddress;
    employee.email = email;
    employee.area = area;
    employee.zipCode = zipCode;
    employee.aadharNo = aadharNo;
    employee.bankName = bankName;
    employee.accountNo = accountNo;
    employee.accountholderName = accountholderName;
    employee.IFSCcode = IFSCcode;
    employee.designation = designation;
  
    await employee.save();
    res.status(200).json({message: 'Employee updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
  });


module.exports = app;