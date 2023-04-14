const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const DayamtExpenses = require('../models/Dayamtexpenses');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-Dayamtexpenses' , async(req,res) => {
    // getting variables from frontend
    const {id,date,amtexp,paidto,reason,folionum} = req.body;

    let dayamtExpenses = DayamtExpenses({id,date,amtexp,paidto,reason,folionum});

    try{
        await dayamtExpenses.save();
        res.status(201).json({message: "Transaction added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-Dayamtexpenses', async(req,res) =>{
    let dayamtExpenses = await DayamtExpenses.find();
 
    if(dayamtExpenses === null){
     return res.status(400).json({error: "No amount recieved"});
    }
    try{
     res.json(dayamtExpenses);
    }catch(error){
     console.error(error);
     res.status(500).json({error: "Internal server error"});
    }
 });

module.exports = app;
