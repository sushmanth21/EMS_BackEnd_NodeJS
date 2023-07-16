const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id:{ 
        type: Number, 
        required: true 
    },
    name:{ 
        type: String, 
        required: true 
    },
    gender: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    state:{ 
        type: String, 
        required: true 
    }
});

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;

