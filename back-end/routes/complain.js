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

app.post('/delete-complain', async (req, res) => {
    console.log(req.query)
    const itemId = req.query.itemId;
    console.log(itemId)
  try {
    // Check if item exists in inventory
    const item = await Complaint.findOne({_id: itemId});
    console.log(item);
    if (!item) {
      return res.status(404).json({error: 'Item not found'});
    }

    // Delete item from inventory
    await Complaint.deleteOne({_id: itemId});
    // await inventory.save();
    res.status(200).json({message: 'Complaint deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
});


module.exports = app;