const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// route to add in front end to call this API
app.post('/add-employee' , async(req,res) => {
    // getting variables from frontend
    const {id,name,phone,address} = req.body;

    let employee = await Employee.findOne({name,phone});
    if(employee){
        return res.status(400).json({error: "Employee already exists."});
    }

    employee = Employee({id,name,phone,address});

    try{
        await employee.save();
        res.status(201).json({message: "Employee added successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = app;