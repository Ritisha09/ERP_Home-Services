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

    if(!username || !password){
        return res.status(400).json({error: "**Missing username or password**"});
    }

    const user = await User.findOne({username});
    if(!user){
        return res.status(400).json({error: "**Invalid username or password**"});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
        return res.status(401).json({error: "**Invalid username or password**"});
    }

    try{
        res.status(200).json({message: 'Sign-in succesful'});
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
    


});

app.post('/signup' , async(req,res) => {
    const {username , password}  = req.body;

    // Check if username and password are present in the request body
    if(!username || !password){
        return res.status(400).json({error: "**Missing username or password**"});
    }

    // Check if the username is unique and not already registered in the database
    const existingUser = await User.findOne({username});
    if(existingUser) {
        return res.status(400).json({error: "**User is already registered**"});
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