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

app.post('/update-customer', async (req, res) => {
    const custId = req.query.custId;
    const {custName,phone,streetaddress,area,zipCode} = req.body;
  
  try {
    // Check if item exists in inventory
    const customer = await Customer.findOne({_id: custId});
    console.log(customer);
  
    if (!customer) {
      return res.status(404).json({error: 'Customer not found'});
    }
    customer.name = custName;
    customer.phone = phone;
    customer.streetaddress = streetaddress;
    customer.area = area;
    customer.zipCode = zipCode;
    
  
    await customer.save();
    res.status(200).json({message: 'Customer updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
  });

app.post('/delete-customer', async (req, res) => {
    console.log(req.query)
    const custId = req.query.custId;
    console.log(custId)
  try {
    // Check if customer exists in inventory
    const customer = await Customer.findOne({_id: custId});
    console.log(customer);
    if (!customer) {
      return res.status(404).json({error: 'customer not found'});
    }

    // Delete customer from inventory
    await Customer.deleteOne({_id: custId});
    // await inventory.save();
    res.status(200).json({message: 'Customer deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
});


module.exports = app;