// ------------------- IMPORTS -------------------
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const employee = require('./routes/Employee'); 

// ------------------- MIDDLEWARE -------------------
app.use(express.json());
mongoose.connect('mongodb+srv://sync212121:TDgYSV4jCA1AJIkV@ems.9t1fpmk.mongodb.net/');

app.listen(port, () => {
    console.log(`App listening at port 3000`);
});

// ------------------- ROUTES -------------------
app.use('/employee', employee); 

