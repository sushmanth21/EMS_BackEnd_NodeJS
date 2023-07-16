const Employee = require('../models/Employee')

let EmployeeController = {};

//--------- Get list of all employees ---------
EmployeeController.getEmployees = async (req, res, next)=> {
    let allEmployees =await Employee.find()

    return res.status(200).json(allEmployees);
};

//--------- Get employee by ID ---------
EmployeeController.getEmployeeById = async (req, res, next)=> {
    let id = req.params.id;

    let foundEmployee =await Employee.findOne({'id':id})

    return res.status(200).json(foundEmployee);
};

// --------- Add a new employee ---------
EmployeeController.addEmployee = async (req, res, next)=>{
    const {
        id,
        name,
        gender,
        age,
        state
    }=req.body;

    let employee = new Employee(
        {
            id, name, state, gender, age
        }
    )
    result= await employee.save();

    return res.status(201).send(result);
};

// --------- Edit employee by ID ---------
EmployeeController.editEmployee = async (req, res, next)=> {
    res.send('render edit form');
};

// --------- Delete employee by ID ---------
EmployeeController.deleteEmployee = async (req, res, next)=> {
    const id = req.params.id;

    deletedEmployee = await Employee.findOneAndDelete({id:id})
    
    return res.status(201).send(deletedEmployee);
};

module.exports = EmployeeController;

