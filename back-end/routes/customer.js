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
    const {custId,name,phone,streetaddress,area,zipCode} = req.body;

    // let customer = await Customer.findOne({name,phone});
    // if(customer){
    //     return res.status(400).json({error: "Customer already exists."});
    // }

    let customer = Customer({custId,name,phone,streetaddress,area,zipCode});

    try{
        await customer.save();
        res.status(201).json({message: "Customer added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get('/get-customer' , async (req,res) => {
    // getting variables from frontend

    let customer = await Customer.find();

    if(customer ===null){
        return res.status(400).json({error: "Employee is Empty"});
    }
    try{
        res.json(customer);
        // res.status(201).json({message: "Inventory displayed!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});


module.exports = app;