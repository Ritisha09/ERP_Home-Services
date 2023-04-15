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
    const {id,action,date,amount,source_destination,reason,folionum} = req.body;

    let dayBookRecord = Daybook({id,action,date,amount,source_destination,reason,folionum});

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

module.exports = app;