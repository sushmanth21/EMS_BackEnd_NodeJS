const express = require('express');
const router = express.Router();
const employee = require('../controllers/EmployeeController');

router.get('/get', employee.getEmployees);
router.get('/get/:id', employee.getEmployeeById);
router.post('/add',employee.addEmployee);
router.post('/edit/:id',employee.editEmployee);
router.delete('/delete/:id',employee.deleteEmployee);

module.exports = router;

