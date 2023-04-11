const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Customer = require('../models/customer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-customer' , async(req,res) => {
    // getting variables from frontend
    const {id,name,phone,streetaddress,area,zipcode} = req.body;

    let customer = await Customer.findOne({name,phone});
    if(customer){
        return res.status(400).json({error: "Customer already exists."});
    }

    customer = Customer({id,name,phone,streetaddress,area,zipcode});

    try{
        await customer.save();
        res.status(201).json({message: "Customer added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = app;