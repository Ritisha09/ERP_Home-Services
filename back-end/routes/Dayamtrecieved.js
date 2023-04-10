const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Dayamtrecieved = require('../models/Dayamtrecieved');

const cors = require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());


// route to add in front end to call this API

app.post('/add-Dayamtrecieved', async(req, res)=>{
    const {id,date,amtrec,moneyrecfrom}=req.body;

    // let Dayamtrecieved= await Dayamtrecieved.findOne({date});

    let Dayamtrecieved= await Dayamtrecieved.findOne({date});

    if(Dayamtrecieved){
        return res.status(400).json({error:"Date changed"})
    }
    Dayamtrecieved = Dayamtrecieved({id,date,amtrec,moneyrecfrom,reason,foliono});
    try{
        await dayamtrecieved.save();
        res.status(201).json({message: "added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
}
);

module.exports = app;

