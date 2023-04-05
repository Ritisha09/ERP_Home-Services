const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

const userRoutes = require('././routes/user')
const empRoutes = require('././routes/employee')

const app = express();

app.use(express.json());
dotenv.config();

PORT = process.env.PORT

connectDB();

app.get('/',(req,res) => {
    res.send("API is running...")
});

app.use('/', userRoutes);
app.use('/', empRoutes);

app.listen(PORT, console.log(`Server started at ${PORT}`));