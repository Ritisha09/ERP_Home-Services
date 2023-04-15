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
    const {custId, compId, phone,serviceType, empId, status, dateOpening, dateClosing, bill} = req.body;

    // let customer = await Customer.findOne({name,phone});
    // if(customer){
    //     return res.status(400).json({error: "Customer already exists."});
    // }

    let complain = Complaint({custId, compId, phone, serviceType, empId, status, dateOpening, dateClosing, bill});

    try{
        await complain.save();
        res.status(201).json({message: "Complaint added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-complain' , async (req,res) => {
    // getting variables from frontend

    let complain = await Complaint.find();

    if(complain===null){
        return res.status(400).json({error: "Complaint is Empty"});
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
    const compId = req.query.compId;
    const {phone, serviceType, status, empId,dateOpening, dateClosing, bill} = req.body;
  
  try {
    // Check if item exists in inventory
    const complain = await Complaint.findOne({_id: compId});
    console.log(complain);
  
    if (!complain) {
      return res.status(404).json({error: 'Complain not found'});
    }
    complain.phone = phone;
    complain.serviceType = serviceType;
    complain.empId = empId;
    complain.status = status;
    complain.dateOpening = dateOpening;
    complain.dateClosing = dateClosing;
    complain.bill = bill;
  
    await complain.save();
    res.status(200).json({message: 'Complain updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
  });


module.exports = app;