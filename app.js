const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

app(false);

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    });

const optionMethods = {
    listDepartments: () => {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.table(result);
        });
        return false;
    },
    listEmployees: () => {
        const sql = `SELECT * FROM employees`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.table(result);
        });
        return false;
    },
    listRoles: () => {
        const sql = `SELECT * FROM roles`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.table(result);
        });
        return false;
    },
    addEmployee: async () => {
        const employeeData = await inquirer.prompt([
            { type: 'input', name: 'first_name', message: "Enter employee's first name" },
            { type: 'input', name: 'last_name', message: "Enter employee's last name" },
            { type: 'input', name: 'salary', message: 'Enter employee salary' }])
            .then(console.log(employeeData))
            .then(
                
        )


        return false;
    },
    exit: () => true
};

async function app(shouldExit) {
    if (shouldExit) {
        console.log('Goodbye! Have a super duper day!');
        return;
    }
    // present user with options
    const { option } = await presentOptions();

    // excecute an option
    shouldExit = await optionMethods[option]();
    app(shouldExit);
}

function presentOptions() {
    const optionQuestions = [{
        type: 'list',
        name: 'option',
        message: 'Please select operation from the following list',
        choices: [
            { name: 'View All Departments', value: 'listDepartments' },
            { name: 'View All Employees', value: 'listEmployees' },
            { name: 'View All Roles', value: 'listRoles' },
            { name: 'Add Department', value: 'addDepartment' },
            { name: 'Add Employee', value: 'addEmployee' },
            {name: 'Update Employee Role', value: 'updateRole'},
            { name: 'Add New Employee', value: 'addEmployee' }, 'Exit',
            ]
    }]

    return inquirer.prompt(optionQuestions)
}

// function presentOptions() {
//     const optionQuestions = [{
//         type: 'list',
//         name: 'optionEmployee',
//         message: 'Please select operation from the following list',
//         choices: [{ name: 'See all Employees', value: 'listEmployees' }, { name: 'Add new Employee', value: 'addEmployee' }, 'exit']
//     }]
//     return inquirer.prompt(optionQuestions)
// }




















// const inquirer = require('inquirer');
// const fs = require('fs');
// const getDeptRoutes = require('./routes/apiRoutes/deptRoutes')

// const promptUser = () => {
    
//     return inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'initialChoice',
//                 message: 'What would you like to do?',
//                 choices: [
//                     'View All Departments',
//                     'View All Employees',
//                     'View All Roles',
//                     'Add Department',
//                     'Add Employee',
//                     'Add Role',
//                     'Update Employee Role'
//                 ]
//             }
//         ])
//         .then(({ initialChoice }) => {
//             if (initialChoice === 'View All Departments') {
//                 return getDeptRoutes();
//             }
//         })
// }

// function init() {
//     promptUser();
// }

// init();
