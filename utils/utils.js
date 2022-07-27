const db = require('../db/connection');


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
        await inquirer.prompt([
            { type: 'input', name: 'first_name', message: "Enter employee's first name:" },
            { type: 'input', name: 'last_name', message: "Enter employee's last name:" },
            {
                type: 'list', name: 'role_id', message: 'Choose employee role:',
                choices: [
                    { name: 'Sales Lead', value: 1 },
                    { name: 'Salesperson', value: 2 },
                    { name: 'Lead Engineer', value: 3 },
                    { name: 'Software Engineer', value: 4 },
                    { name: 'Account Manager', value: 5 },
                    { name: 'Accountant', value: 6 },
                    { name: 'Legal Team Lead', value: 7 },
                    { name: 'Lawyer', value: 8 }
                ]
            }])
            .then(({ first_name, last_name, role_id }) => {
                employee = new Employee(first_name, last_name, role_id);
                console.log(employee);
            })
            .then(() => {
                console.log("hello")
                // const sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES (${employee.first_name}, ${employee.last_name}, ${employee.role_id}, 1)`;
                const sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES (Mark, Twain, 2, 1)`;


                db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log("hi");
                })
            })
            .then(() => {
                console.log("world")
                const sql = `SELECT * FROM employees`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.table(result);
                });
            });
        return false;
    },
    exit: () => true
};

module.exports = optionMethods;