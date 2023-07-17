// ---------------------------- IMPORTS ----------------------------
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3000;

const employee = require('./routes/Employee'); 

// ---------------------------- MIDDLEWARE ----------------------------
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://sync212121:TDgYSV4jCA1AJIkV@ems.9t1fpmk.mongodb.net/')
    .then(()=>{
        console.log('MongoDB is connected!');
        app.listen(port, () => {
            console.log(`App is listening at port ${port}`);
        });
    })
    .catch((err)=>{
        console.log(err)
    })

// ---------------------------- ROUTES ----------------------------
app.use('/employee', employee); 

