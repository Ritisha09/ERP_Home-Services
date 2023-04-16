const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Daybook = require('../models/daybook');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-daybook' , async(req,res) => {
    // getting variables from frontend
    const {id,action,date,accountNo,amount,recipient_payer,referenceNo,reason,folionum} = req.body;

    let dayBookRecord = Daybook({id,action,date,accountNo,amount,recipient_payer,referenceNo,reason,folionum});

    try{
        await dayBookRecord.save();
        res.status(201).json({message: "Record added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-daybook' , async(req,res) => {
    let dayBookRecord = await Daybook.find();
 
    if(dayBookRecord === null){
     return res.status(400).json({error: "No record exists"});
    }
    try{
     res.json(dayBookRecord);
    }catch(error){
     console.error(error);
     res.status(500).json({error: "Internal server error"});
    }
});

app.post('/update-daybookRecord', async (req, res) => {
    const recordId = req.query.recordId;
    const {action,date,accountNo,amount,recipient_payer,referenceNo,reason,folionum} = req.body;
  
  try {
    // Check if item exists in inventory
    const dayBookRecord = await Daybook.findOne({_id: recordId});
    console.log(dayBookRecord);
  
    if (!dayBookRecord) {
      return res.status(404).json({error: 'Record not found'});
    }
    dayBookRecord.action = action;
    dayBookRecord.date = date;
    dayBookRecord.accountNo = accountNo;
    dayBookRecord.amount = amount;
    dayBookRecord.recipient_payer = recipient_payer;
    dayBookRecord.referenceNo = referenceNo;
    dayBookRecord.reason = reason;
    dayBookRecord.folionum = folionum;
  
    await dayBookRecord.save();
    res.status(200).json({message: 'Record updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
  });

  app.post('/delete-daybookRecord', async (req, res) => {
    console.log(req.query)
    const recordId = req.query.recordId;
    console.log(recordId)
  try {
    // Check if item exists in inventory
    const dayBookRecord = await Daybook.findOne({_id: recordId});
    console.log(dayBookRecord);
    if (!dayBookRecord) {
      return res.status(404).json({error: 'Record not found'});
    }
  
    // Delete item from inventory
    await Daybook.deleteOne({_id: recordId});
    // await inventory.save();
    res.status(200).json({message: 'Employee deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
  });

module.exports = app;