const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Inventory = require('../models/inventory');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-inventory' , async(req,res) => {
    // getting variables from frontend
    const {id,name,quantity,price} = req.body;

    let inventory = await Inventory.findOne({name});
    if(inventory){
        return res.status(400).json({error: "Item already exists."});
    }

    inventory = Inventory({id,name,quantity,price});

    try{
        await inventory.save();
        res.status(201).json({message: "Item added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-inventory' , async (req,res) => {
    // getting variables from frontend

    let inventory = await Inventory.find();

    if(inventory===null){
        return res.status(400).json({error: "Inverntory is Empty"});
    }
    try{
        res.json(inventory);
        // res.status(201).json({message: "Inventory displayed!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = app;