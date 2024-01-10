const inquirer = require('inquirer');
const connection = require('./config/connection');

function init() {
    inquirer
        .prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        })
        .then(async (answer) => {
            switch (answer.action) {
                case 'View all departments':
                    await viewDepartments();
                    break;
                case 'View all roles':
                    await viewRoles();
                    break;
                case 'View all employees':
                    await viewEmployees();
                    break;
                case 'Add a department':
                    await addDepartment();
                    break;
                case 'Add a role':
                    await addRole();
                    break;
                case 'Add an employee':
                    await addEmployee();
                    break;
                case 'Update an employee role':
                    await updateEmployeeRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
}





init();