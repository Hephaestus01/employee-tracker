const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const optionMethods = require('./utils/utils');

const Employee = require('./lib/Employee');
let employee;

app(false);

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});


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
        message: 'Please select operation from the following list:',
        choices: [
            { name: 'View All Departments', value: 'listDepartments' },
            { name: 'View All Employees', value: 'listEmployees' },
            { name: 'View All Roles', value: 'listRoles' },
            { name: 'Add Department', value: 'addDepartment' },
            { name: 'Add Employee', value: 'addEmployee' },
            { name: 'Update Employee Role', value: 'updateRole' },
            'Exit',
        ]
    }]

    return inquirer.prompt(optionQuestions)
};