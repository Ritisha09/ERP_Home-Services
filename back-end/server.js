const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

const userRoutes = require("././routes/user");
const empRoutes = require("././routes/employee");
const custRoutes = require("././routes/customer");
const inventRoutes = require("././routes/inventory");
const DayamtExpenses = require("././routes/Dayamtexpenses");
const compRoutes  = require("./routes/complain")
const DayamtrecievedRoutes= require("././routes/Dayamtrecieved");
const daybookRoutes = require("././routes/daybook");

const app = express();

app.use(express.json());
dotenv.config();

PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/", userRoutes);
app.use("/", empRoutes);
app.use("/", custRoutes);
app.use("/", inventRoutes);
app.use("/", compRoutes);
app.use("/", daybookRoutes);

app.use("/", DayamtExpenses);
app.use("/", DayamtrecievedRoutes);

app.listen(PORT, console.log(`Server started at ${PORT}`));
