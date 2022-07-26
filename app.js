const inquirer = require('inquirer');

app(false);

const optionMethods = {
    listEmployees: () => {
        console.log('You have no employees...')
        return false;
    },
    addEmployee: async () => {
        const employeeData = await inquirer.prompt([{
            type: 'input', name: 'name', message: 'whats the name of the employee?'
        },
        { type: 'input', name: 'salary', message: 'whats should be their salary?' }]);
        console.log(employeeData)
        return false;
    },
    exit: () => true
}

async function app(shouldExit) {
    if (shouldExit) {
        console.log('Goodbye! Have a super duper day!');
        return;
    }
    // present user with options
    const { option } = await presentOptions();
    console.log(option)
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

function presentOptions() {
    const optionQuestions = [{
        type: 'list',
        name: 'optionEmployee',
        message: 'Please select operation from the following list',
        choices: [{ name: 'See all Employees', value: 'listEmployees' }, { name: 'Add new Employee', value: 'addEmployee' }, 'exit']
    }]
    return inquirer.prompt(optionQuestions)
}




















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
