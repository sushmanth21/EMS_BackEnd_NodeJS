const Employee = require('../models/Employee')

let EmployeeController = {};

//--------- Get list of all employees ---------
EmployeeController.getEmployees = async (req, res, next)=> {
    let allEmployees;

    try{
        allEmployees = await Employee.find();

        if(!allEmployees){
            return res.status(404).json({message: "No Employees Found!"});
        }
    }
    catch(err){
        console.log(err)
        return res.status(502).json(err);
    }
    return res.status(200).json(allEmployees);
};

//--------- Get employee by ID ---------
EmployeeController.getEmployeeById = async (req, res, next)=> {
    let id = req.params.id;
    let foundEmployee

    try{
        foundEmployee = await Employee.findOne({'id':id})

        if(!foundEmployee){
            return res.status(404).json({message: `No Employee Found with ID ${id}`});
        }
    }
    catch(err){
        console.log(err)
        return res.status(502).json(err);
    }
    return res.status(200).json(foundEmployee);
};

// --------- Add a new employee ---------
EmployeeController.addEmployee = async (req, res, next)=>{
    const { id, name, gender, age, state } = req.body;

    let employee = new Employee(
        {
            id, name, gender, age, state
        }
    )

    try{
        await employee.save();
    }
    catch(err){
        console.log(err)
        return res.status(502).json(err);
    }
    return res.status(201).send({message: "Employee added successfully!"});
};

// --------- Edit employee by ID ---------
EmployeeController.editEmployee = async (req, res, next)=> {
    const id = req.params.id;
    const data = req.body

    Employee.updateOne({'id':id}, {$set: data}, (err, result)=>{
        if(err){
            console.log(err)
            return res.status(502).json(err);
        }
        else{
            return res.status(200).json({message: "Employee details updated successfully!"});
        }
    })
};

// --------- Delete employee by ID ---------
EmployeeController.deleteEmployee = async (req, res, next)=> {
    const id = req.params.id;

    try{
        await Employee.findOneAndDelete({id:id})
    }
    catch(err){
        console.log(err)
        return res.status(502).json(err);
    }
    return res.status(201).send({message: `Employee with ID ${id} deleted successfully!`});
};

module.exports = EmployeeController;

