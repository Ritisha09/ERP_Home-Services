const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/signin', async(req,res) =>{
    const {username, password} = req.body;
    const existingUser = await User.findOne({username});

    if(!existingUser){
        return res.status(400).json({error: "User not registered"});
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if(!passwordMatch){
        return res.status(401).json({error: 'Incorrect Password'});
    }

    res.status(201).json({error: 'user logged in'});


});

app.post('/signup' , async(req,res) => {
    const {username , password}  = req.body;
    const existingUser = await User.findOne({username});

    if(existingUser) {
        return res.status(400).json({error: "username is already registered"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = User({username, password: hashedPassword});

    try{
        await user.save();
        res.status(201).json({message: "User registered successfully!!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = app;